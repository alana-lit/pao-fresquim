package br.com.paofresquim.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "serasa")
public class Serasa {

    @Id
    private Integer idSerasa;

    @Column
    private boolean estadoSerasa = false;

    @Column(length = 200)
    private String mensagem;
}