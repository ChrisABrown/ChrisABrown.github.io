package com.personalproject.TekTaco.models;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Optional;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class AppResponse {
    private int status;
    private String message;
    private boolean success;
    private Object data;





}