package br.com.paofresquim.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
abstract class Pessoa  {

    private String nome;
    private String cpf;
    private String email;
    private String endereco;
    private String telefone;
    private int idade;
    private Date dataNascimento;
    private String estadoCivil;
}
