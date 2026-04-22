package br.com.paofresquim.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.DateTimeException;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Seguranca {

    private DateTimeException dataHora;
    private int Cam;
}
