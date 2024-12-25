package com.portfolio.portfolio.entities;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String stockName;
    private String ticker;
    private Integer quantity;
    private Double buyPrice;
    private Double currentPrice;
}
