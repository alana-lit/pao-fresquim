package br.com.paofresquim.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "pessoa")
@Inheritance(strategy = InheritanceType.JOINED)
@Getter
@Setter
public abstract class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 100)
    private String nome;

    @Column(nullable = false, length = 14)
    private String cpf;

    @Column(nullable = false, length = 150)
    private String email;

    @Column(nullable = false, length = 11)
    private String telefone;

    @Column(nullable = false, length = 150)
    private String endereco;

    @Column
    private Integer idade;

    @Column(name = "data_nascimento")
    private Date dataNascimento;

    @Column(name = "estado_civil", length = 20)
    private String estadoCivil;
}