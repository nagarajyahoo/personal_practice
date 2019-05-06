package com.sks.security.resource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.DefaultTokenServices;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;

@Configuration
@EnableResourceServer
public class SksResourceServer extends ResourceServerConfigurerAdapter {
    @Value("${sks.security.signing-key}")
    private String signingKey;

    @Override
    public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
        resources.tokenServices(tokenServices())
                .tokenStore(tokenStore());
    }

    private TokenStore tokenStore() throws Exception {
        return new JwtTokenStore(tokenEnhancer());
    }

    private JwtAccessTokenConverter tokenEnhancer() throws Exception {
        JwtAccessTokenConverter tokenConverter = new JwtAccessTokenConverter();
        tokenConverter.setSigningKey(signingKey);
        tokenConverter.afterPropertiesSet();
        return tokenConverter;
    }

    private DefaultTokenServices tokenServices() throws Exception {
        DefaultTokenServices defaultTokenServices = new DefaultTokenServices();
        defaultTokenServices.setTokenStore(tokenStore());
        defaultTokenServices.setSupportRefreshToken(true);
        defaultTokenServices.setTokenEnhancer(tokenEnhancer());
        return defaultTokenServices;
    }
}
