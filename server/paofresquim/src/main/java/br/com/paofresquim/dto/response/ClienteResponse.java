package br.com.paofresquim.dto.response;

import br.com.paofresquim.model.Cliente;
import lombok.Getter;

import java.util.Date;

@Getter
public class ClienteResponse {

    private final Integer id;
//    private final String nome;
    private final Boolean estadoSerasa;
    private final Boolean inativo;

    public ClienteResponse(Cliente cliente) {
        this.id = cliente.getId();
//        this.nome = cliente.getPessoa().getNome();
        this.estadoSerasa = cliente.getEstadoSerasa();
        this.inativo = cliente.getInativo();
    }
}