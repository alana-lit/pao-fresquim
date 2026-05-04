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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idSerasa;

    @Column
    private boolean estadoSerasa = false;
}