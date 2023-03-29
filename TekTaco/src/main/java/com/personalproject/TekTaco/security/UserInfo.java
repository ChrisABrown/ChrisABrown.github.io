package com.personalproject.TekTaco.security;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.personalproject.TekTaco.models.User;
import org.bson.types.ObjectId;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import java.util.Objects;
import java.util.stream.Collectors;

public class UserInfo implements UserDetails {
    private final ObjectId id;

    private final String userName;
    @JsonIgnore
    private final String password;
    private final List<GrantedAuthority> authorities;

    public UserInfo(User user) {
        id = user.getUserId();
        userName = user.getUsername();
        password = user.getPassword();
        authorities = Arrays.stream(user.getRoles().split(","))
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return userName;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        UserInfo user = (UserInfo) o;
        return Objects.equals(id, user.id);
    }
}
