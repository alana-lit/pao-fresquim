package br.com.paofresquim.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.*;

import java.util.ArrayList;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data

public class RegistroPonto {
    private Date data;
    private LocalTime hora;
    private boolean feriado;
    private boolean falta;

}
