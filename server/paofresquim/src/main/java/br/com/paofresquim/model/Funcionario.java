package br.com.paofresquim.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data

public class Funcionario extends Pessoa {

    private Usuario usuario;
    private ArrayList<RegistroPonto> pontos = new ArrayList<RegistroPonto>();
    private ArrayList<Atestado> atestados = new ArrayList<Atestado>();
    private Date dataContratacao;
    private double salario;
    private Date dataDemissao;
    private Date inicioFerias;
    private Date fimFerias;
    private int pis_pasep;
    private String cargo;
    private int matricula;
    private String numeroCttEmergencia;
    private String nomeCttEmergencia;

}
