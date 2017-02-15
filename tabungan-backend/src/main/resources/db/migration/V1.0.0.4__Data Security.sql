insert into s_user (id, username, password, email, fullname, active)
values ('u001', 'user001', 'u00123', 'user001@contoh.com', 'User 001', true);

insert into s_user (id, username, password, email, fullname, active)
values ('u002', 'user002', 'u00123', 'user002@contoh.com', 'User 002', true);

insert into s_user (id, username, password, email, fullname, active)
values ('u003', 'user003', 'u00123', 'user003@contoh.com', 'User 003', true);

insert into s_user (id, username, password, email, fullname, active)
values ('u004', 'user004', 'u00123', 'user004@contoh.com', 'User 004', true);

insert into s_permission (id, name, label)
values ('p001', 'HARGA_VIEW', 'Lihat data harga');

insert into s_permission (id, name, label)
values ('p002', 'HARGA_EDIT', 'Edit data harga');

insert into s_permission (id, name, label)
values ('p003', 'TRANSAKSI_VIEW', 'Lihat data transaksi');

insert into s_permission (id, name, label)
values ('p004', 'TRANSAKSI_EDIT', 'Edit data transaksi');

insert into s_role (id, name, label)
values ('r001', 'ADMIN', 'Administrator');

insert into s_role (id, name, label)
values ('r002', 'CUSTOMER', 'Nasabah');


insert into s_user_role(id_user, id_role)
values ('u001', 'r001');

insert into s_user_role(id_user, id_role)
values ('u002', 'r002');

insert into s_user_role(id_user, id_role)
values ('u003', 'r002');

insert into s_user_role(id_user, id_role)
values ('u004', 'r002');

insert into s_role_permission (id_role, id_permission)
values ('r001', 'p001');

insert into s_role_permission (id_role, id_permission)
values ('r001', 'p002');

insert into s_role_permission (id_role, id_permission)
values ('r001', 'p003');

insert into s_role_permission (id_role, id_permission)
values ('r002', 'p001');

insert into s_role_permission (id_role, id_permission)
values ('r002', 'p003');

insert into s_role_permission (id_role, id_permission)
values ('r002', 'p004');