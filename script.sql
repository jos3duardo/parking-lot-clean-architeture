create database parking
    with owner postgres;

-- auto-generated definition
create table parked_car
(
    plate varchar,
    date  timestamp,
    code  varchar
);

alter table parked_car
    owner to postgres;


-- auto-generated definition
create table parking_lot
(
    code       varchar,
    capacity   integer,
    open_our   integer,
    close_hour integer
);

alter table parking_lot
    owner to postgres;
