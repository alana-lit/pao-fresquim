package br.com.paofresquim.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
abstract class Pessoa {

    private String name;
    private int age;
    private String CPF;
    private Date dataNascimento;
    private String endereco;
    private String estadoCivil;
    private String codCadastro;
}
