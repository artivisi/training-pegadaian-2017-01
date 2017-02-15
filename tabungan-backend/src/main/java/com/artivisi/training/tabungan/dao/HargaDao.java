package com.artivisi.training.tabungan.dao;

import com.artivisi.training.tabungan.entity.Harga;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface HargaDao extends PagingAndSortingRepository<Harga, String> {
    
}
