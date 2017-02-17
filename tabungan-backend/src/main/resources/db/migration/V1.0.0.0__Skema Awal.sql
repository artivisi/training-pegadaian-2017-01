create table harga (
    id varchar(36),
    harga_jual decimal(19,2) not null,
    harga_beli decimal(19,2) not null,
    tanggal_berlaku date not null,
    aktif boolean not null,
    primary key (id)
);

create table jual (
    id varchar(36),
    waktu_transaksi datetime not null, 
    harga decimal(19,2) not null,
    gram decimal(19,2) not null,
    username varchar(255) not null
);