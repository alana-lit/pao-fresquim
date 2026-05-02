package br.com.paofresquim.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data

public class Notificacao {

    private Comunicacao comunicao;
    private String mensagem;
    private boolean cobranca;
    private Date dataEnvio;

}
