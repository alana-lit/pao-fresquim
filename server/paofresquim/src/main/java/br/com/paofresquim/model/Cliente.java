package br.com.paofresquim.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Cliente extends Pessoa{

    private String codCliente;
    private int idConta;

}
