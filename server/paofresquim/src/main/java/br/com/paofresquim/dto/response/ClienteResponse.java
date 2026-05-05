package br.com.paofresquim.dto.response;

import br.com.paofresquim.model.Cliente;
import br.com.paofresquim.model.Serasa;
import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
public class ClienteResponse {

    private final Integer id;
    private final String nome;
    private final String cpf;
    private final String email;
    private final String telefone;
    private final String endereco;
    private Integer idade;
    private Date dataNascimento;
    private String estadoCivil;
    private Serasa serasa;
    private boolean inativo;

    public ClienteResponse(Cliente cliente) {
        this.id = cliente.getId();
        this.nome = cliente.getNome();
        this.cpf = cliente.getCpf();
        this.email = cliente.getEmail();
        this.telefone = cliente.getTelefone();
        this.endereco = cliente.getEndereco();
        this.idade = cliente.getIdade();
        this.dataNascimento = cliente.getDataNascimento();
        this.estadoCivil = cliente.getEstadoCivil();
        this.serasa = cliente.getSerasa();
        this.inativo = cliente.isInativo();
    }
}