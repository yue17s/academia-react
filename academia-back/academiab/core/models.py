# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Alumnos(models.Model):
    id_alu = models.IntegerField(primary_key=True)
    codigo_alu = models.CharField(max_length=10)
    ape_alu = models.CharField(max_length=150)
    nom_alu = models.CharField(max_length=150)
    dni_alu = models.CharField(max_length=8)
    dire_alu = models.CharField(max_length=250)
    barra_alu = models.DecimalField(max_digits=13, decimal_places=0)
    email_alu = models.CharField(max_length=50)
    celular_alu = models.DecimalField(max_digits=12, decimal_places=0)
    papa_alu = models.CharField(max_length=250)
    mama_alu = models.CharField(max_length=250)
    imagen_alu = models.TextField()

    def __str__(self):
        return self.ape_alu + ", " + self.nom_alu

    class Meta:
        managed = False
        db_table = 'alumnos'
        verbose_name_plural = "alumnos"


class AlumnosAsistencia(models.Model):
    id_asis = models.IntegerField(primary_key=True)
    fecha_asis = models.DateField()
    alumnos_id_alu = models.ForeignKey(Alumnos, models.DO_NOTHING, db_column='alumnos_id_alu')

    def __str__(self):
        return self.alumnos_id_alu

    class Meta:
        managed = False
        db_table = 'alumnos_asistencia'
        verbose_name_plural = "alumnos asistencia"


class Biblioteca(models.Model):
    id_bibli = models.IntegerField(primary_key=True)
    codigo_bibli = models.CharField(max_length=6)
    titulo_bibli = models.CharField(max_length=100)
    autor_bibli = models.CharField(max_length=100)
    editorial_bibli = models.CharField(max_length=100)
    edicion_bibli = models.DecimalField(max_digits=4, decimal_places=0)
    isbn_bibli = models.CharField(max_length=12)
    stock_bibli = models.DecimalField(max_digits=3, decimal_places=0)
    barra_bibli = models.DecimalField(max_digits=13, decimal_places=0)
    disponible_bibli = models.BooleanField()
    imagen_bibli = models.TextField()

    def __str__(self):
        return self.titulo_bibli


    class Meta:
        managed = False
        db_table = 'biblioteca'
        verbose_name_plural = "biblioteca"


class BibliotecaPrestamo(models.Model):
    id_bipre = models.IntegerField(primary_key=True)
    codigo_bipre = models.CharField(max_length=10)
    fechapres_bipre = models.DateField()
    fechadevo_bipre = models.DateField()
    docentes_id_doce = models.ForeignKey('Docentes', models.DO_NOTHING, db_column='docentes_id_doce')
    alumnos_id_alu = models.ForeignKey(Alumnos, models.DO_NOTHING, db_column='alumnos_id_alu')

    class Meta:
        managed = False
        db_table = 'biblioteca_prestamo'
        verbose_name_plural = "biblioteca prestamo"


class BibliotecaPrestamoDetalle(models.Model):
    id_bpd = models.IntegerField(primary_key=True)
    biblioteca_id_bibli = models.ForeignKey(Biblioteca, models.DO_NOTHING, db_column='biblioteca_id_bibli')
    biblioteca_prestamo_id_bipre = models.ForeignKey(BibliotecaPrestamo, models.DO_NOTHING,
                                                     db_column='biblioteca_prestamo_id_bipre')

    class Meta:
        managed = False
        db_table = 'biblioteca_prestamo_detalle'
        verbose_name_plural = "biblioteca prestamo detalle"


class Cursos(models.Model):
    id_curso = models.IntegerField(primary_key=True)
    nom_curso = models.TextField()
    materia_id_mate = models.ForeignKey('Materia', models.DO_NOTHING, db_column='materia_id_mate')
    docentes_id_doce = models.ForeignKey('Docentes', models.DO_NOTHING, db_column='docentes_id_doce')

    class Meta:
        managed = False
        db_table = 'cursos'
        verbose_name_plural = "cursos"


class CursosComple(models.Model):
    id_cuco = models.IntegerField(primary_key=True)
    modalidad_cuco = models.IntegerField()
    tipo_cuco = models.CharField(max_length=50)
    nom_cuco = models.TextField()
    fechaini_cuco = models.DateField()
    fechafin_cuco = models.DateField()
    precio_cuco = models.DecimalField(max_digits=4, decimal_places=2)
    detalle_cuco = models.TextField()
    imagen_cuco = models.TextField()
    materia_id_mate = models.ForeignKey('Materia', models.DO_NOTHING, db_column='materia_id_mate')
    docentes_id_doce = models.ForeignKey('Docentes', models.DO_NOTHING, db_column='docentes_id_doce')

    class Meta:
        managed = False
        db_table = 'cursos_comple'
        verbose_name_plural = "cursos complementarios"


class Docentes(models.Model):
    id_doce = models.IntegerField(primary_key=True)
    codigo_doce = models.CharField(max_length=10)
    ape_doce = models.CharField(max_length=50)
    nom_doce = models.CharField(max_length=50)
    dni_doce = models.CharField(max_length=8)
    email_doce = models.CharField(max_length=50)
    celular_doce = models.DecimalField(max_digits=12, decimal_places=0)
    barra_doce = models.DecimalField(max_digits=13, decimal_places=0)
    cv_doce = models.IntegerField()
    imagen_doce = models.TextField()
    materia_id_mate = models.ForeignKey('Materia', models.DO_NOTHING, db_column='materia_id_mate')

    class Meta:
        managed = False
        db_table = 'docentes'
        verbose_name_plural = "docentes"


class Facturacion(models.Model):
    id_factu = models.IntegerField(primary_key=True)
    libreria_pedido_id_pedi = models.ForeignKey('LibreriaPedido', models.DO_NOTHING,
                                                db_column='libreria_pedido_id_pedi')

    class Meta:
        managed = False
        db_table = 'facturacion'
        verbose_name_plural = "facturacion"


class Horario(models.Model):
    id_hora = models.IntegerField(primary_key=True)
    turno_hora = models.CharField(max_length=10)
    anio_hora = models.DecimalField(max_digits=4, decimal_places=0)
    mes_hora = models.DecimalField(max_digits=2, decimal_places=0)
    dia_hora = models.CharField(max_length=9)
    hoini_hora = models.TimeField()
    hofin_hora = models.TimeField()
    secciones_id_sec = models.ForeignKey('Secciones', models.DO_NOTHING, db_column='secciones_id_sec')
    docentes_id_doce = models.ForeignKey(Docentes, models.DO_NOTHING, db_column='docentes_id_doce')
    cursos_id_curso = models.ForeignKey(Cursos, models.DO_NOTHING, db_column='cursos_id_curso')

    class Meta:
        managed = False
        db_table = 'horario'
        verbose_name_plural = "horario"


class Libreria(models.Model):
    id_libre = models.IntegerField(primary_key=True)
    titulo_libre = models.CharField(max_length=100)
    autor_libre = models.CharField(max_length=100)
    editorial_libre = models.CharField(max_length=100)
    edicion_libre = models.DecimalField(max_digits=4, decimal_places=0)
    isbn_libre = models.CharField(max_length=12)
    stock_libre = models.DecimalField(max_digits=3, decimal_places=0)
    barra_libre = models.DecimalField(max_digits=13, decimal_places=0)
    disponible_libre = models.IntegerField()
    codigo_libre = models.CharField(max_length=6)
    imagen_libre = models.TextField()

    class Meta:
        managed = False
        db_table = 'libreria'
        verbose_name_plural = "libreria"


class LibreriaPedido(models.Model):
    id_lipe = models.IntegerField(primary_key=True)
    codigo_lipe = models.CharField(max_length=6)
    usuarios_id_usu = models.ForeignKey('Usuarios', models.DO_NOTHING, db_column='usuarios_id_usu')
    docentes_id_doce = models.ForeignKey(Docentes, models.DO_NOTHING, db_column='docentes_id_doce')
    alumnos_id_alu = models.ForeignKey(Alumnos, models.DO_NOTHING, db_column='alumnos_id_alu')

    class Meta:
        managed = False
        db_table = 'libreria_pedido'
        verbose_name_plural = "libreria pedido"


class LibreriaPedidoDetalle(models.Model):
    id_lpd = models.IntegerField(primary_key=True)
    libreria_pedido_id_lipe = models.ForeignKey(LibreriaPedido, models.DO_NOTHING, db_column='libreria_pedido_id_lipe')
    libreria_id_libre = models.ForeignKey(Libreria, models.DO_NOTHING, db_column='libreria_id_libre')

    class Meta:
        managed = False
        db_table = 'libreria_pedido_detalle'
        verbose_name_plural = "libreria pedido detalle"


class Materia(models.Model):
    id_mate = models.IntegerField(primary_key=True)
    materia_mate = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'materia'
        verbose_name_plural = "materia"


class Matricula(models.Model):
    id_matri = models.IntegerField(primary_key=True)
    alumnos_id_alu = models.ForeignKey(Alumnos, models.DO_NOTHING, db_column='alumnos_id_alu')
    horario_id_hora = models.ForeignKey(Horario, models.DO_NOTHING, db_column='horario_id_hora')
    nota1_matri = models.DecimalField(max_digits=2, decimal_places=2)
    nota2_matri = models.DecimalField(max_digits=2, decimal_places=2)
    promedio_matri = models.DecimalField(max_digits=2, decimal_places=2)
    subsanacion_matri = models.DecimalField(max_digits=2, decimal_places=2)
    promefinal_matri = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'matricula'
        verbose_name_plural = "matricula"


class Secciones(models.Model):
    id_sec = models.IntegerField(primary_key=True)
    nom_sec = models.CharField(max_length=5)
    aula_sec = models.CharField(max_length=6)

    class Meta:
        managed = False
        db_table = 'secciones'
        verbose_name_plural = "secciones"


class Usuarios(models.Model):
    id_usu = models.IntegerField(primary_key=True)
    ape_usu = models.CharField(max_length=150)
    nom_usu = models.CharField(max_length=150)
    dni_usu = models.CharField(max_length=8)
    dire_usu = models.CharField(max_length=250)
    email_usu = models.CharField(max_length=50)
    celular_usu = models.DecimalField(max_digits=12, decimal_places=0)
    imagen_usu = models.TextField()

    class Meta:
        managed = False
        db_table = 'usuarios'
        verbose_name_plural = "usuarios"
