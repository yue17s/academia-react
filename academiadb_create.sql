-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2020-11-23 03:04:01.808

-- tables
-- Table: alumnos
CREATE TABLE alumnos (
    id_alu int NOT NULL AUTO_INCREMENT,
    codigo_alu varchar(10) NOT NULL,
    ape_alu varchar(150) NOT NULL,
    nom_alu varchar(150) NOT NULL,
    dni_alu varchar(8) NOT NULL,
    dire_alu varchar(250) NOT NULL,
    barra_alu numeric(13,0) NOT NULL,
    email_alu varchar(50) NOT NULL,
    celular_alu decimal(12,0) NOT NULL,
    papa_alu varchar(250) NOT NULL,
    mama_alu varchar(250) NOT NULL,
    imagen_alu text NOT NULL,
    CONSTRAINT alumnos_pk PRIMARY KEY (id_alu)
);

-- Table: alumnos_asistencia
CREATE TABLE alumnos_asistencia (
    id_asis int NOT NULL AUTO_INCREMENT,
    alumnos_id_alu int NOT NULL,
    fecha_asis date NOT NULL,
    CONSTRAINT alumnos_asistencia_pk PRIMARY KEY (id_asis)
);

-- Table: alumnos_notas
CREATE TABLE alumnos_notas (
    id_nota int NOT NULL AUTO_INCREMENT,
    alumnos_id_alu int NOT NULL,
    cursos_id_curso int NOT NULL,
    nota1_nota decimal(4,2) NOT NULL,
    nota2_nota decimal(4,2) NOT NULL,
    promedio_nota decimal(4,2) NOT NULL,
    matricula_id_mat int NOT NULL,
    CONSTRAINT alumnos_notas_pk PRIMARY KEY (id_nota)
);

-- Table: biblioteca
CREATE TABLE biblioteca (
    id_bibli int NOT NULL AUTO_INCREMENT,
    codigo_bibli varchar(6) NOT NULL,
    materia_id_mate int NOT NULL,
    titulo_bibli varchar(100) NOT NULL,
    autor_bibli varchar(100) NOT NULL,
    editorial_bibli varchar(100) NOT NULL,
    edicion_bibli numeric(4,0) NOT NULL,
    isbn_bibli varchar(12) NOT NULL,
    stock_bibli numeric(3,0) NOT NULL,
    barra_bibli numeric(13,0) NOT NULL,
    disponible_bibli bool NOT NULL,
    imagen_bibli text NOT NULL,
    CONSTRAINT biblioteca_pk PRIMARY KEY (id_bibli)
);

-- Table: biblioteca_prestamo
CREATE TABLE biblioteca_prestamo (
    id_bipre int NOT NULL AUTO_INCREMENT,
    alumnos_id_alu int NOT NULL,
    fechapres_bipre date NOT NULL,
    fechadevo_bipre date NOT NULL,
    docentes_id_doce int NOT NULL,
    CONSTRAINT biblioteca_prestamo_pk PRIMARY KEY (id_bipre)
);

-- Table: biblioteca_prestamo_detalle
CREATE TABLE biblioteca_prestamo_detalle (
    id_bpd int NOT NULL AUTO_INCREMENT,
    biblioteca_prestamo_id_bipre int NOT NULL,
    entrego_bpd bool NOT NULL,
    biblioteca_id_bibli int NOT NULL,
    CONSTRAINT biblioteca_prestamo_detalle_pk PRIMARY KEY (id_bpd)
);

-- Table: cursos
CREATE TABLE cursos (
    id_curso int NOT NULL AUTO_INCREMENT,
    nom_curso varchar(250) NOT NULL,
    materia_id_mate int NOT NULL,
    CONSTRAINT cursos_pk PRIMARY KEY (id_curso)
);

-- Table: cursos_comple
CREATE TABLE cursos_comple (
    id_cuco int NOT NULL AUTO_INCREMENT,
    modalidad_cuco bool NOT NULL,
    materia_id_mate int NOT NULL,
    tipo_cuco varchar(50) NOT NULL,
    nom_cuco text NOT NULL,
    docentes_id_doce int NOT NULL,
    fechaini_cuco date NOT NULL,
    fechafin_cuco date NOT NULL,
    precio_cuco decimal(6,2) NOT NULL,
    detalle_cuco text NOT NULL,
    imagen_cuco text NOT NULL,
    CONSTRAINT cursos_comple_pk PRIMARY KEY (id_cuco)
);

-- Table: docentes
CREATE TABLE docentes (
    id_doce int NOT NULL AUTO_INCREMENT,
    codigo_doce varchar(10) NOT NULL,
    ape_doce varchar(50) NOT NULL,
    nom_doce varchar(50) NOT NULL,
    dni_doce varchar(8) NOT NULL,
    email_doce varchar(50) NOT NULL,
    celular_doce decimal(12,0) NOT NULL,
    barra_doce numeric(13,0) NOT NULL,
    cv_doce text NOT NULL,
    imagen_doce text NOT NULL,
    materia_id_mate int NOT NULL,
    CONSTRAINT docentes_pk PRIMARY KEY (id_doce)
);

-- Table: facturacion
CREATE TABLE facturacion (
    id_factu int NOT NULL AUTO_INCREMENT,
    subtotal_factu decimal(5,2) NOT NULL,
    igv_factu decimal(5,2) NOT NULL,
    total_factu decimal(5,2) NOT NULL,
    libreria_pedido_codigo_lipe varchar(6) NOT NULL,
    CONSTRAINT facturacion_pk PRIMARY KEY (id_factu)
);

-- Table: horario
CREATE TABLE horario (
    id_hora int NOT NULL AUTO_INCREMENT,
    turno_hora varchar(10) NOT NULL,
    anio_hora decimal(4,0) NOT NULL,
    dia_hora varchar(9) NOT NULL,
    hoini_hora time NOT NULL,
    hofin_hora time NOT NULL,
    secciones_id_sec int NOT NULL,
    matricula_id_mat int NOT NULL,
    docentes_id_doce int NOT NULL,
    CONSTRAINT horario_pk PRIMARY KEY (id_hora)
);

-- Table: libreria
CREATE TABLE libreria (
    id_libre int NOT NULL AUTO_INCREMENT,
    codigo_libre varchar(6) NOT NULL,
    materia_id_mate int NOT NULL,
    titulo_libre varchar(100) NOT NULL,
    autor_libre varchar(100) NOT NULL,
    editorial_libre varchar(100) NOT NULL,
    edicion_libre numeric(4,0) NOT NULL,
    isbn_libre varchar(12) NOT NULL,
    stock_libre numeric(3,0) NOT NULL,
    precio_libre decimal(6,2) NOT NULL,
    barra_libre numeric(13,0) NOT NULL,
    disponible_libre bool NOT NULL,
    imagen_libre text NOT NULL,
    detalle_libre text NOT NULL,
    CONSTRAINT libreria_pk PRIMARY KEY (id_libre)
);

-- Table: libreria_pedido
CREATE TABLE libreria_pedido (
    codigo_lipe varchar(6) NOT NULL,
    fecha_lipe date NOT NULL,
    entrego_lpd bool NOT NULL,
    usuarios_id_usu int NOT NULL,
    CONSTRAINT pedido_pk PRIMARY KEY (codigo_lipe)
);

-- Table: libreria_pedido_detalle
CREATE TABLE libreria_pedido_detalle (
    id_lpd int NOT NULL AUTO_INCREMENT,
    libreria_pedido_codigo_lipe varchar(6) NOT NULL,
    cantidad_lpd int NOT NULL,
    precio decimal(6,2) NOT NULL,
    descuento_lpd decimal(5,2) NOT NULL,
    libreria_id_libre int NOT NULL,
    CONSTRAINT libreria_pedido_detalle_pk PRIMARY KEY (id_lpd)
);

-- Table: materia
CREATE TABLE materia (
    id_mate int NOT NULL AUTO_INCREMENT,
    nom_mate varchar(50) NOT NULL,
    CONSTRAINT materia_pk PRIMARY KEY (id_mate)
);

-- Table: matricula
CREATE TABLE matricula (
    id_mat int NOT NULL AUTO_INCREMENT,
    codigo_mat varchar(5) NOT NULL,
    anio_mat numeric(4,0) NOT NULL,
    detalle_mat text NOT NULL,
    CONSTRAINT matricula_pk PRIMARY KEY (id_mat)
);

-- Table: secciones
CREATE TABLE secciones (
    id_sec int NOT NULL AUTO_INCREMENT,
    nom_sec varchar(5) NOT NULL,
    aula_sec varchar(6) NOT NULL,
    CONSTRAINT secciones_pk PRIMARY KEY (id_sec)
);

-- Table: usuarios
CREATE TABLE usuarios (
    id_usu int NOT NULL AUTO_INCREMENT,
    dni_usu varchar(8) NOT NULL,
    ape_usu varchar(150) NOT NULL,
    nom_usu varchar(150) NOT NULL,
    dire_usu varchar(250) NOT NULL,
    email_usu varchar(50) NOT NULL,
    celular_usu decimal(12,0) NOT NULL,
    fecha_usu date NOT NULL,
    imagen_usu text NOT NULL,
    CONSTRAINT usuarios_pk PRIMARY KEY (id_usu)
);

-- foreign keys
-- Reference: alumnos_asistencia_alumnos (table: alumnos_asistencia)
ALTER TABLE alumnos_asistencia ADD CONSTRAINT alumnos_asistencia_alumnos FOREIGN KEY alumnos_asistencia_alumnos (alumnos_id_alu)
    REFERENCES alumnos (id_alu);

-- Reference: alumnos_notas_alumnos (table: alumnos_notas)
ALTER TABLE alumnos_notas ADD CONSTRAINT alumnos_notas_alumnos FOREIGN KEY alumnos_notas_alumnos (alumnos_id_alu)
    REFERENCES alumnos (id_alu);

-- Reference: alumnos_notas_cursos (table: alumnos_notas)
ALTER TABLE alumnos_notas ADD CONSTRAINT alumnos_notas_cursos FOREIGN KEY alumnos_notas_cursos (cursos_id_curso)
    REFERENCES cursos (id_curso);

-- Reference: alumnos_notas_matricula (table: alumnos_notas)
ALTER TABLE alumnos_notas ADD CONSTRAINT alumnos_notas_matricula FOREIGN KEY alumnos_notas_matricula (matricula_id_mat)
    REFERENCES matricula (id_mat);

-- Reference: biblioteca_materia (table: biblioteca)
ALTER TABLE biblioteca ADD CONSTRAINT biblioteca_materia FOREIGN KEY biblioteca_materia (materia_id_mate)
    REFERENCES materia (id_mate);

-- Reference: biblioteca_prestamo_alumnos (table: biblioteca_prestamo)
ALTER TABLE biblioteca_prestamo ADD CONSTRAINT biblioteca_prestamo_alumnos FOREIGN KEY biblioteca_prestamo_alumnos (alumnos_id_alu)
    REFERENCES alumnos (id_alu);

-- Reference: biblioteca_prestamo_detalle_biblioteca (table: biblioteca_prestamo_detalle)
ALTER TABLE biblioteca_prestamo_detalle ADD CONSTRAINT biblioteca_prestamo_detalle_biblioteca FOREIGN KEY biblioteca_prestamo_detalle_biblioteca (biblioteca_id_bibli)
    REFERENCES biblioteca (id_bibli);

-- Reference: biblioteca_prestamo_detalle_biblioteca_prestamo (table: biblioteca_prestamo_detalle)
ALTER TABLE biblioteca_prestamo_detalle ADD CONSTRAINT biblioteca_prestamo_detalle_biblioteca_prestamo FOREIGN KEY biblioteca_prestamo_detalle_biblioteca_prestamo (biblioteca_prestamo_id_bipre)
    REFERENCES biblioteca_prestamo (id_bipre);

-- Reference: biblioteca_prestamo_docentes (table: biblioteca_prestamo)
ALTER TABLE biblioteca_prestamo ADD CONSTRAINT biblioteca_prestamo_docentes FOREIGN KEY biblioteca_prestamo_docentes (docentes_id_doce)
    REFERENCES docentes (id_doce);

-- Reference: cursos_comple_docentes (table: cursos_comple)
ALTER TABLE cursos_comple ADD CONSTRAINT cursos_comple_docentes FOREIGN KEY cursos_comple_docentes (docentes_id_doce)
    REFERENCES docentes (id_doce);

-- Reference: cursos_comple_materia (table: cursos_comple)
ALTER TABLE cursos_comple ADD CONSTRAINT cursos_comple_materia FOREIGN KEY cursos_comple_materia (materia_id_mate)
    REFERENCES materia (id_mate);

-- Reference: cursos_materia (table: cursos)
ALTER TABLE cursos ADD CONSTRAINT cursos_materia FOREIGN KEY cursos_materia (materia_id_mate)
    REFERENCES materia (id_mate);

-- Reference: docentes_materia (table: docentes)
ALTER TABLE docentes ADD CONSTRAINT docentes_materia FOREIGN KEY docentes_materia (materia_id_mate)
    REFERENCES materia (id_mate);

-- Reference: facturacion_libreria_pedido (table: facturacion)
ALTER TABLE facturacion ADD CONSTRAINT facturacion_libreria_pedido FOREIGN KEY facturacion_libreria_pedido (libreria_pedido_codigo_lipe)
    REFERENCES libreria_pedido (codigo_lipe);

-- Reference: horario_docentes (table: horario)
ALTER TABLE horario ADD CONSTRAINT horario_docentes FOREIGN KEY horario_docentes (docentes_id_doce)
    REFERENCES docentes (id_doce);

-- Reference: horario_matricula (table: horario)
ALTER TABLE horario ADD CONSTRAINT horario_matricula FOREIGN KEY horario_matricula (matricula_id_mat)
    REFERENCES matricula (id_mat);

-- Reference: horario_secciones (table: horario)
ALTER TABLE horario ADD CONSTRAINT horario_secciones FOREIGN KEY horario_secciones (secciones_id_sec)
    REFERENCES secciones (id_sec);

-- Reference: libreria_materia (table: libreria)
ALTER TABLE libreria ADD CONSTRAINT libreria_materia FOREIGN KEY libreria_materia (materia_id_mate)
    REFERENCES materia (id_mate);

-- Reference: libreria_pedido_detalle_libreria (table: libreria_pedido_detalle)
ALTER TABLE libreria_pedido_detalle ADD CONSTRAINT libreria_pedido_detalle_libreria FOREIGN KEY libreria_pedido_detalle_libreria (libreria_id_libre)
    REFERENCES libreria (id_libre);

-- Reference: libreria_pedido_detalle_libreria_pedido (table: libreria_pedido_detalle)
ALTER TABLE libreria_pedido_detalle ADD CONSTRAINT libreria_pedido_detalle_libreria_pedido FOREIGN KEY libreria_pedido_detalle_libreria_pedido (libreria_pedido_codigo_lipe)
    REFERENCES libreria_pedido (codigo_lipe);

-- Reference: libreria_pedido_usuarios (table: libreria_pedido)
ALTER TABLE libreria_pedido ADD CONSTRAINT libreria_pedido_usuarios FOREIGN KEY libreria_pedido_usuarios (usuarios_id_usu)
    REFERENCES usuarios (id_usu);

-- End of file.

