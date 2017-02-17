package com.artivisi.training.tabungan.controller;

import com.artivisi.training.tabungan.dao.JualDao;
import com.artivisi.training.tabungan.entity.Jual;
import java.util.Date;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/jual")
public class JualRestController {
    @Autowired private JualDao jualDao;
    
    @PreAuthorize("hasAuthority('TRANSAKSI_VIEW')")
    @GetMapping("/")
    public Page<Jual> semuaPenjualan(Pageable page){
        return jualDao.findAll(page);
    }
    
    @PreAuthorize("hasAuthority('TRANSAKSI_EDIT')")
    @PostMapping("/")
    @ResponseStatus(HttpStatus.CREATED)
    public void semuaPenjualan(@RequestBody @Valid Jual jual, Authentication currentUser){
        jual.setUsername(currentUser.getName());
        jual.setWaktuTransaksi(new Date());
        jualDao.save(jual);
    }
}
