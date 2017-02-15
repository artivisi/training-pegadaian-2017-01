package com.artivisi.training.tabungan.controller;

import com.artivisi.training.tabungan.dao.HargaDao;
import com.artivisi.training.tabungan.entity.Harga;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/harga")
public class HargaRestController {
    
    @Autowired private HargaDao hargaDao;
    
    @PreAuthorize("hasAuthority('HARGA_EDIT')")
    @GetMapping("/")
    public Page<Harga> daftarHarga(Pageable page){
        return hargaDao.findAll(page);
    }
}
