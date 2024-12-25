package com.portfolio.portfolio.Service;

@Service
public class StockService {
    @Autowired
    private StockRepository stockRepository;

    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }

    public Stock addStock(Stock stock) {
        return stockRepository.save(stock);
    }

    public Stock updateStock(Long id, Stock stock) {
        stock.setId(id);
        return stockRepository.save(stock);
    }

    public void deleteStock(Long id) {
        stockRepository.deleteById(id);
    }
}

