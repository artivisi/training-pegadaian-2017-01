create table s_user(
    id varchar(36),
    username varchar(255) not null,
    password varchar(255) not null,
    email varchar(255) not null,
    fullname varchar(255) not null,
    active boolean not null,
    primary key (id),
    unique(username),
    unique(email)
);

create table s_permission(
    id varchar(36), 
    name varchar(255) not null,
    label varchar(255) not null,
    primary key (id),
    unique (name)
);

create table s_role(
    id varchar(36), 
    name varchar(255) not null,
    label varchar(255) not null,
    primary key (id),
    unique (name)
);

create table s_user_role(
    id_user varchar(36),
    id_role varchar(36),
    primary key (id_user, id_role),
    foreign key (id_user) references s_user(id),
    foreign key (id_role) references s_role(id)
);

create table s_role_permission(
    id_role varchar(36),
    id_permission varchar(36),
    primary key (id_role,id_permission),
    foreign key (id_permission) references s_permission(id),
    foreign key (id_role) references s_role(id)
);
