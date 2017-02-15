create table harga (
    id varchar(36),
    harga_jual decimal(19,2) not null,
    harga_beli decimal(19,2) not null,
    tanggal_berlaku date not null,
    aktif boolean not null,
    primary key (id)
);
