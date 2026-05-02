package br.com.paofresquim.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class NFE {

    private String codNFE;
    private String estado;
    private Date data;
    private LocalTime hora;
    private String CNPJ;
    private String nomeFantasia;
    private String nomeEmpresarial;
    private double valor;
    private String cpf;

}
