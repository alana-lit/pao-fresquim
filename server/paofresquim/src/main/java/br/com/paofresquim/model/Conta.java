package br.com.paofresquim.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Conta {

    private double valor;
    private ArrayList<Venda> vendas = new ArrayList<>();
    private int idConta;
}
