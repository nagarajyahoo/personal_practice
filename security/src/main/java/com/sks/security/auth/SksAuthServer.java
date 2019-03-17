package com.sks.security.auth;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.DefaultTokenServices;
import org.springframework.security.oauth2.provider.token.TokenEnhancer;
import org.springframework.security.oauth2.provider.token.TokenStore;

import javax.inject.Inject;

@Configuration
@EnableAuthorizationServer
public class SksAuthServer extends AuthorizationServerConfigurerAdapter {
    private final AuthenticationManager authManager;
    private final SksUserDetailsService userDetailsService;
    private final TokenStore tokenStore;
    private final DefaultTokenServices tokenService;
    private final TokenEnhancer tokenEnhancer;

    @Inject
    public SksAuthServer(final AuthenticationManager authManager,
                         final SksUserDetailsService userDetailsService,
                         final TokenEnhancer tokenEnhancer,
                         final DefaultTokenServices tokenService,
                         final TokenStore tokenStore) {
        this.authManager = authManager;
        this.userDetailsService = userDetailsService;
        this.tokenEnhancer = tokenEnhancer;
        this.tokenService = tokenService;
        this.tokenStore = tokenStore;
    }

    @Bean
    public AuthenticationProvider authProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        return authProvider;
    }

    @Override
    public void configure(AuthorizationServerSecurityConfigurer oauthServer) throws Exception {
        oauthServer
                .allowFormAuthenticationForClients()
                .tokenKeyAccess("isAnonymous() || hasAuthority('ROLE_TRUSTED_CLIENT')")
                .checkTokenAccess("hasAuthority('ROLE_TRUSTED_CLIENT')");
    }

    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        //@formatter:off
        clients.inMemory()
                .withClient("live-test")
                .secret("{noop}bGl2ZS10ZXN0")
                .authorities("ROLE_TRUSTED_CLIENT")
                .authorizedGrantTypes("password", "authorization_code")
                .redirectUris("http://localhost:8080/token", "http://localhost:3000/receiver/token")
                .scopes("read", "write")
                .autoApprove("read", "write")
                .accessTokenValiditySeconds(3600);
        ;
        //@formatter:on
    }

    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        //@formatter:off
        endpoints
                .tokenStore(tokenStore)
                .tokenServices(tokenService)
                .authenticationManager(authManager)
                .tokenEnhancer(tokenEnhancer)
                .allowedTokenEndpointRequestMethods(HttpMethod.GET, HttpMethod.POST);
        //@formatter:on
    }
}
