package br.com.paofresquim.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Produtos {

    private String nomeProduto;
    private String descricaoProduto;
    private Date data;
    private int codBarras;
}
