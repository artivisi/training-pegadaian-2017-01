package com.artivisi.training.tabungan.dao;

import com.artivisi.training.tabungan.entity.Jual;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface JualDao extends PagingAndSortingRepository<Jual, String> {
    
}
