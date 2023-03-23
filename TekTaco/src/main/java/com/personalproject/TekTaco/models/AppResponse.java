package com.personalproject.TekTaco.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class AppResponse {
    private int status;
    private String message;
    private boolean success;
    private Object data;
    protected String token;

    public AppResponse(int status, String message, boolean success, Object data) {
        this.status = status;
        this.message = message;
        this.success = success;
        this.data = data;
    }

}