package com.sks.security.auth;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.DefaultTokenServices;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;

import javax.inject.Inject;

@Configuration
@EnableAuthorizationServer
public class SksAuthServer extends AuthorizationServerConfigurerAdapter {
    @Value("${sks.web.client.id}")
    private String clientId;
    @Value("${sks.web.client.secret}")
    private String clientSecret;
    @Value("${sks.web.client.redirect.uri}")
    private String clientRedirectUri;
    @Value("${sks.web.client.token.timeout}")
    private int clientTokenTimeout;
    private final AuthenticationManager authenticationManager;
    private final SksUserDetailsService userDetailsService;

    @Inject
    public SksAuthServer(final AuthenticationManager authenticationManager,
                         final SksUserDetailsService userDetailsService) {
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        return authProvider;
    }

    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        //@formatter:off
        clients.inMemory()
                .withClient(clientId)
                .secret(clientSecret)
                .authorities("ROLE_TRUSTED_CLIENT")
                .authorizedGrantTypes("password", "authorization_code")
                .redirectUris(clientRedirectUri)
                .scopes("read", "write")
                .autoApprove("read", "write")
                .accessTokenValiditySeconds(clientTokenTimeout);
        //@formatter:on
    }

    @Override
    public void configure(AuthorizationServerSecurityConfigurer oauthServer) throws Exception {
        oauthServer
                .tokenKeyAccess("isAnonymous() || hasAuthority('ROLE_TRUSTED_CLIENT')")
                .checkTokenAccess("hasAuthority('ROLE_TRUSTED_CLIENT')");
    }

    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        //@formatter:off
        endpoints
                .tokenStore(tokenStore())
                .tokenServices(tokenServices())
                .authenticationManager(authenticationManager)
                .tokenEnhancer(tokenEnhancer())
                .allowedTokenEndpointRequestMethods(HttpMethod.GET, HttpMethod.POST);
        //@formatter:on
    }

    private TokenStore tokenStore() {
        return new JwtTokenStore(tokenEnhancer());
    }

    private JwtAccessTokenConverter tokenEnhancer() {
        JwtAccessTokenConverter tokenConverter = new JwtAccessTokenConverter();
        tokenConverter.setSigningKey("abcdefgh");
        return tokenConverter;
    }

    @Bean
    @Primary
    public DefaultTokenServices tokenServices() {
        DefaultTokenServices defaultTokenServices = new DefaultTokenServices();
        defaultTokenServices.setTokenStore(tokenStore());
        defaultTokenServices.setSupportRefreshToken(true);
        defaultTokenServices.setTokenEnhancer(tokenEnhancer());
        return defaultTokenServices;
    }
}
