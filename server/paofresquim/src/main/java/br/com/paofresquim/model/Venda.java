package br.com.paofresquim.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data

public class Venda {

    private Cliente cliente;
    private Pagamento pagamento;
    private NFE nf_e;
    private Funcionario funcionario;
    private Date dataVenda;
    private ArrayList<Produtos>  produtos = new ArrayList<Produtos>();
    private double valorVenda;
    private String status;

}
