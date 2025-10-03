show DATABASES;
create DATABASE Renta;
use Renta;
create table section(
    id_section VARCHAR(20) primary key,
    Section_name varchar(50),
    DOC varchar(20)
);

insert INTO section (id_section, section_name, DOC) VALUES
('Sect001', 'Rides', '24/09/2025'),
('Sect002', 'Apartments/Houses', '24/09/2025'),
('Sect003', 'Services', '24/09/2025');

create table Apartments_Houses(
    Apartment_id varchar(20) primary key,
    Apartment_name varchar(100),
    Price Int,
    LOCATION varchar(200),
    id_section varchar(20),
    Foreign Key (id_section) REFERENCES section(id_section),
    availability_status varchar(20) not null
);

create table Services(
    service_id varchar(20) primary key,
    service_name varchar(200),
    LOCATION varchar(200),
    Price BOOLEAN,
    id_section varchar(20),
    Foreign Key (id_section) REFERENCES section(id_section)
);

show TABLES;