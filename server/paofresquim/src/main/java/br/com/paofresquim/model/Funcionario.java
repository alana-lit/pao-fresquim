package br.com.paofresquim.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Funcionario extends Pessoa{

    public int matricula;
    private int pisPasep;
    private Date dataContratacao;
    private Usuario idUsuario;
    private String registroEmpregos;
    private Date PeriodoFerias;

}
