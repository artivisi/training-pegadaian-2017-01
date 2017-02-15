package com.artivisi.training.tabungan.entity;

import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "harga")
public class Harga {
    
    @Id
    private String id;
    
    @NotNull @Min(0)
    @Column(name = "harga_jual", nullable = false)
    private BigDecimal hargaJual;
    
    @NotNull @Min(0)
    @Column(name = "harga_beli", nullable = false)
    private BigDecimal hargaBeli;
    
    @NotNull
    @Column(name = "tanggal_berlaku", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date tanggalBerlaku;
    private Boolean aktif;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public BigDecimal getHargaJual() {
        return hargaJual;
    }

    public void setHargaJual(BigDecimal hargaJual) {
        this.hargaJual = hargaJual;
    }

    public BigDecimal getHargaBeli() {
        return hargaBeli;
    }

    public void setHargaBeli(BigDecimal hargaBeli) {
        this.hargaBeli = hargaBeli;
    }

    public Date getTanggalBerlaku() {
        return tanggalBerlaku;
    }

    public void setTanggalBerlaku(Date tanggalBerlaku) {
        this.tanggalBerlaku = tanggalBerlaku;
    }

    public Boolean getAktif() {
        return aktif;
    }

    public void setAktif(Boolean aktif) {
        this.aktif = aktif;
    }
    
    
}
