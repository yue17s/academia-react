# from django.contrib.auth.models import User
from django.db import models
from django.contrib.auth.models import (AbstractBaseUser, PermissionsMixin, UserManager)
from django.conf import settings  # para imagenes


# ************************************************************************
class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField('Nombre de Usuario', max_length=30, unique=True)
    email = models.CharField('E-Mail', max_length=200, unique=True)
    name = models.CharField('Nombre', max_length=100, blank=True)
    is_active = models.BooleanField('Esta activo?', blank=True, default=True)
    is_staff = models.BooleanField('Es del Equipo?', blank=True, default=True)
    date_joined = models.DateTimeField('Fecha Registo', auto_now_add=True)
    imagen = models.ImageField(upload_to='usuarios/imagen', null=True, blank=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.name or self.username

    def get_img(self):
        if self.imagen:
            return '{}{}'.format(settings.MEDIA_URL, self.imagen)
        return '{}{}'.format(settings.STATIC_URL, 'img/default.jpg')

    class Meta:
        verbose_name = 'Persona Contraseña'
        verbose_name_plural = 'Personas Contraseñas'
        ordering = ['date_joined']


class Person(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='person')
    age = models.PositiveIntegerField()
    bio = models.TextField()
    picture = models.ImageField(upload_to="usuarios/fotos", null=True, blank=True)

    def __str__(self):
        return str(self.user)

    class Meta:
        verbose_name = 'Persona Detalles'
        verbose_name_plural = 'Personas Detalles'


# ************************************************************************

class Materia(models.Model):
    id_mate = models.AutoField(primary_key=True)
    nom_mate = models.CharField("Nombre de la Materia", max_length=50, help_text='Nombre de la materia')

    def __str__(self):
        return self.nom_mate

    class Meta:
        managed = False
        db_table = 'materia'
        verbose_name = 'materia'
        verbose_name_plural = "materia"
        ordering = ['nom_mate']


# ***************************************************************************************#
# ********************************* ALUMNOS *********************************************#
class Alumnos(models.Model):
    id_alu = models.AutoField(primary_key=True)
    codigo_alu = models.CharField("Codigo", max_length=10, help_text="5 caracteres - Ej. AL000")
    ape_alu = models.CharField("Apellidos", max_length=150)
    nom_alu = models.CharField("Nombre(s)", max_length=150)
    dni_alu = models.CharField("D.N.I.", max_length=8, help_text="8 digitos")
    dire_alu = models.CharField("Direccion de domicilio", max_length=250)
    barra_alu = models.DecimalField("Codigo de barras", max_digits=13, decimal_places=0, help_text="12 digitos")
    email_alu = models.CharField("Email personal", max_length=50)
    celular_alu = models.IntegerField("Celular", help_text="9 digitos")
    papa_alu = models.CharField("Apellidos y nombres del padre", max_length=250)
    mama_alu = models.CharField("Apellidos y nombres de la madre", max_length=250)
    imagen_alu = models.CharField("Fotografia", max_length=350)
    pass_alu = models.CharField("Password", max_length=120)
    tiposesion = models.CharField("Tipo de sesion", max_length=12, default="ALUMNO")

    def __str__(self):
        return self.ape_alu + ", " + self.nom_alu + " - " + self.codigo_alu

    class Meta:
        managed = False
        db_table = 'alumnos'
        verbose_name_plural = "alumnos"
        verbose_name = 'Alumno'
        ordering = ['ape_alu']


class AlumnosAsistencia(models.Model):
    id_asis = models.AutoField(primary_key=True)
    alumnos_id_alu = models.ForeignKey(Alumnos, models.DO_NOTHING, db_column='alumnos_id_alu',
                                       related_name="alumnosAsistenciasAlumnos")
    fecha_asis = models.DateField("Fecha que asistio")

    def __str__(self):
        return str(self.alumnos_id_alu) + " | FECHA: " + str(self.fecha_asis)

    class Meta:
        managed = False
        db_table = 'alumnos_asistencia'
        verbose_name_plural = "alumnos - asistencias"
        verbose_name = 'Alumno - asistencia'
        ordering = ['alumnos_id_alu', 'fecha_asis']


class AlumnosNotas(models.Model):
    id_nota = models.AutoField(primary_key=True)
    alumnos_id_alu = models.ForeignKey(Alumnos, models.DO_NOTHING, db_column='alumnos_id_alu',
                                       related_name="alumnosNotasAlumnos")
    matricula_id_mat = models.ForeignKey('Matricula', models.DO_NOTHING, db_column='matricula_id_mat',
                                         related_name="alumnosNotasMatricula")
    cursos_id_curso = models.ForeignKey('Cursos', models.DO_NOTHING, db_column='cursos_id_curso',
                                        related_name="alumnosNotasCurso")
    nota1_nota = models.DecimalField("Nota 1", max_digits=4, decimal_places=2, default=0,
                                     help_text='Ej. 10.30 -- ( 0 a 20)')
    nota2_nota = models.DecimalField("Nota 2", max_digits=4, decimal_places=2, default=0,
                                     help_text='Ej. 10.30 -- ( 0 a 20)')
    promedio_nota = models.DecimalField("Promedio", max_digits=4, decimal_places=2, help_text='(Nota 1 + Nota 2)/2')

    def __str__(self):
        return str(self.alumnos_id_alu) + ' | ' + str(self.cursos_id_curso)

    class Meta:
        managed = False
        db_table = 'alumnos_notas'
        verbose_name_plural = "alumnos - notas"
        verbose_name = 'Alumno - nota'
        ordering = ['alumnos_id_alu']


# ***************************************************************************************#
# ******************************** BIBLIOTECA *******************************************#

class Biblioteca(models.Model):
    id_bibli = models.AutoField(primary_key=True)
    codigo_bibli = models.CharField(max_length=6)
    materia_id_mate = models.ForeignKey('Materia', models.DO_NOTHING, db_column='materia_id_mate')
    titulo_bibli = models.CharField(max_length=100)
    autor_bibli = models.CharField(max_length=100)
    editorial_bibli = models.CharField(max_length=100)
    edicion_bibli = models.DecimalField(max_digits=4, decimal_places=0)
    isbn_bibli = models.CharField(max_length=12)
    stock_bibli = models.DecimalField(max_digits=3, decimal_places=0)
    barra_bibli = models.DecimalField("Codigo de barras", max_digits=13, decimal_places=0, help_text="12 digitos")
    disponible_bibli = models.BooleanField(default=True)
    imagen_bibli = models.CharField(max_length=350)

    def __str__(self):
        return self.titulo_bibli + " - " + self.codigo_bibli

    class Meta:
        managed = False
        db_table = 'biblioteca'
        verbose_name_plural = "biblioteca"
        verbose_name = 'Biblioteca'
        ordering = ['titulo_bibli']


class BibliotecaPrestamo(models.Model):
    id_bipre = models.AutoField(primary_key=True)
    alumnos_id_alu = models.ForeignKey(Alumnos, models.DO_NOTHING, db_column='alumnos_id_alu')
    fechapres_bipre = models.DateField()
    fechadevo_bipre = models.DateField()
    docentes_id_doce = models.ForeignKey('Docentes', models.DO_NOTHING, db_column='docentes_id_doce')

    class Meta:
        managed = False
        db_table = 'biblioteca_prestamo'
        verbose_name_plural = "biblioteca - prestamos"
        verbose_name = 'biblioteca - prestamo'
        ordering = ['fechapres_bipre']


class BibliotecaPrestamoDetalle(models.Model):
    id_bpd = models.AutoField(primary_key=True)
    biblioteca_prestamo_id_bipre = models.ForeignKey(BibliotecaPrestamo, models.DO_NOTHING,
                                                     db_column='biblioteca_prestamo_id_bipre')
    entrego_bpd = models.IntegerField()
    biblioteca_id_bibli = models.ForeignKey(Biblioteca, models.DO_NOTHING, db_column='biblioteca_id_bibli')

    class Meta:
        managed = False
        db_table = 'biblioteca_prestamo_detalle'
        verbose_name_plural = "biblioteca - prestamos detalles"
        verbose_name = 'biblioteca - prestamo detalle'


class Cursos(models.Model):
    id_curso = models.AutoField(primary_key=True)
    nom_curso = models.CharField(max_length=250)
    materia_id_mate = models.ForeignKey('Materia', models.DO_NOTHING, db_column='materia_id_mate')

    def __str__(self):
        return self.nom_curso

    class Meta:
        managed = False
        db_table = 'cursos'
        verbose_name_plural = "cursos"
        verbose_name = 'Curso'
        ordering = ['nom_curso']


class CursosComple(models.Model):
    id_cuco = models.AutoField(primary_key=True)
    modalidad_cuco = models.IntegerField()
    materia_id_mate = models.ForeignKey('Materia', models.DO_NOTHING, db_column='materia_id_mate')
    tipo_cuco = models.CharField(max_length=50)
    nom_cuco = models.TextField()
    fechaini_cuco = models.DateField()
    fechafin_cuco = models.DateField()
    precio_cuco = models.DecimalField(max_digits=4, decimal_places=2)
    detalle_cuco = models.TextField()
    imagen_cuco = models.CharField(max_length=350)
    docentes_id_doce = models.ForeignKey('Docentes', models.DO_NOTHING, db_column='docentes_id_doce')

    def __str__(self):
        return self.nom_cuco

    class Meta:
        managed = False
        db_table = 'cursos_comple'
        verbose_name_plural = "cursos complementarios"
        verbose_name = 'Curso complementario'
        ordering = ['fechaini_cuco']


# ***************************************************************************************#
# ************************************* DOCENTES ****************************************#
class Docentes(models.Model):
    id_doce = models.AutoField(primary_key=True)
    codigo_doce = models.CharField("Codigo:", max_length=10)
    ape_doce = models.CharField("Apellidos", max_length=50)
    nom_doce = models.CharField("Nombre(s)", max_length=50)
    dni_doce = models.CharField("D.N.I", max_length=8, help_text="8 digitos")
    email_doce = models.CharField("Email", max_length=50)
    celular_doce = models.DecimalField("Celular", max_digits=12, decimal_places=0)
    barra_doce = models.DecimalField("Codigo de barras", max_digits=13, decimal_places=0, help_text="12 digitos")
    cv_doce = models.TextField("Curriculum")
    # imagen_doce = models.ImageField("Fotografia", upload_to='img/docentes/', blank=True, null=True)
    imagen_doce = models.CharField(max_length=350)
    materia_id_mate = models.ForeignKey('Materia', models.DO_NOTHING, db_column='materia_id_mate',
                                        related_name="DocentesMateria")
    activo = models.BooleanField("Activo", default=True)
    slug = models.SlugField("Slug del Apellido", max_length=50, unique=True, help_text="Campo creado para el apellido")

    def __str__(self):
        return self.ape_doce + ", " + self.nom_doce + " - " + self.codigo_doce

    class Meta:
        managed = False
        db_table = 'docentes'
        verbose_name_plural = "docentes"
        verbose_name = 'Docente'
        ordering = ['ape_doce']


# ***************************************************************************************#
# ***************************************************************************************#


class Horario(models.Model):
    id_hora = models.AutoField(primary_key=True)
    turno_hora = models.CharField(max_length=10)
    anio_hora = models.DecimalField(max_digits=4, decimal_places=0)
    dia_hora = models.CharField(max_length=9)
    hoini_hora = models.TimeField()
    hofin_hora = models.TimeField()
    secciones_id_sec = models.ForeignKey('Secciones', models.DO_NOTHING, db_column='secciones_id_sec')
    matricula_id_mat = models.ForeignKey('Matricula', models.DO_NOTHING, db_column='matricula_id_mat')
    docentes_id_doce = models.ForeignKey(Docentes, models.DO_NOTHING, db_column='docentes_id_doce')

    class Meta:
        managed = False
        db_table = 'horario'
        verbose_name_plural = "horario"


# ***************************************************************************************#
# ************************************* LIBRERIA ****************************************#
class Libreria(models.Model):
    id_libre = models.AutoField(primary_key=True)
    materia_id_mate = models.ForeignKey('Materia', models.DO_NOTHING, db_column='materia_id_mate',
                                        related_name="libreriaMateria")
    codigo_libre = models.CharField("Codigo", max_length=6)
    titulo_libre = models.CharField("Titulo", max_length=100)
    autor_libre = models.CharField("Autor", max_length=100)
    editorial_libre = models.CharField("Editorial", max_length=100)
    edicion_libre = models.DecimalField("Edicion", max_digits=4, decimal_places=0, help_text="Ej.: 2010")
    isbn_libre = models.CharField("ISBN", max_length=12, help_text="12 Digitos")
    stock_libre = models.DecimalField("Stock", max_digits=3, decimal_places=0)
    precio_libre = models.DecimalField("Precio", max_digits=6, decimal_places=2)
    barra_libre = models.DecimalField("Codigo de barras", max_digits=13, decimal_places=0, help_text="13 digitos")
    disponible_libre = models.BooleanField("Disponible?", default=True)
    # imagen_libre = models.ImageField("Imagen Libro", upload_to='img/libreria/', blank=True, null=True)
    imagen_libre = models.CharField("Foto", max_length=350)
    detalle_libre = models.TextField("Detalle del Libro")
    recomendado_libre = models.BooleanField("Recomendado?", default=True)

    def __str__(self):
        return self.titulo_libre + " - " + self.codigo_libre

    class Meta:
        managed = False
        db_table = 'libreria'
        verbose_name_plural = "libreria"
        verbose_name = 'libreria'
        ordering = ['titulo_libre']


class LibreriaPedido(models.Model):
    codigo_lipe = models.IntegerField("Codigo del Pedido", primary_key=True, help_text="5 caracteres - Ej. 10000")
    fecha_lipe = models.DateField("Fecha de Pedido")
    entrego_lpd = models.BooleanField("¿Entregado?")
    usuarios = models.ForeignKey('Usuarios', models.DO_NOTHING, db_column='usuarios_id_usu',
                                 related_name="libreria_pedido")

    def __str__(self):
        return str(self.codigo_lipe)

    class Meta:
        managed = False
        db_table = 'libreria_pedido'
        verbose_name_plural = "libreria - pedidos"
        verbose_name = 'Libreria - pedido'
        # ordering = ['codigo_lipe']


class LibreriaPedidoDetalle(models.Model):
    id_lpd = models.AutoField(primary_key=True)
    libreria_pedido_codigo_lipe = models.ForeignKey('LibreriaPedido', models.DO_NOTHING,
                                                    db_column='libreria_pedido_codigo_lipe',
                                                    related_name="LibreriaPedidoDetallePedido")
    libreria = models.ForeignKey(Libreria, models.DO_NOTHING, db_column='libreria_id_libre',
                                 related_name="LibreriaPedidoDetalleLibro")
    cantidad_lpd = models.IntegerField("Cantidad")
    precio = models.DecimalField("Precio", max_digits=6, decimal_places=2)
    descuento_lpd = models.DecimalField("Descuento", max_digits=5, decimal_places=2)

    def __str__(self):
        return str(self.libreria_pedido_codigo_lipe)

    class Meta:
        managed = False
        db_table = 'libreria_pedido_detalle'
        verbose_name_plural = "libreria - pedidos detalles"
        verbose_name = 'Libreria - pedido detalle'
        ordering = ['libreria_pedido_codigo_lipe']


class Facturacion(models.Model):
    id_factu = models.AutoField(primary_key=True)
    libreria_pedido_id_lipe = models.ForeignKey('LibreriaPedido', models.DO_NOTHING,
                                                db_column='libreria_pedido_id_lipe')
    subtotal_factu = models.DecimalField(max_digits=5, decimal_places=2)
    igv_factu = models.DecimalField(max_digits=5, decimal_places=2)
    total_factu = models.DecimalField(max_digits=5, decimal_places=2)

    class Meta:
        managed = False
        db_table = 'facturacion'
        verbose_name_plural = "facturacion"


class Checkout(models.Model):
    id = models.IntegerField(primary_key=True, help_text="Llega del FrontEnd")
    fecha_check = models.DateField("Fecha de ID Stripe")

    class Meta:
        managed = False
        db_table = 'checkout'
        verbose_name_plural = "checkouts"


# ***************************************************************************************#
# ***************************************************************************************#
class Matricula(models.Model):
    id_mat = models.AutoField(primary_key=True)
    codigo_mat = models.CharField("Codigo de Matricula", max_length=5)
    anio_mat = models.IntegerField("Año", default="2020", help_text="Ej. 2020")
    detalle_mat = models.TextField("Detalle")

    def __str__(self):
        return self.codigo_mat

    class Meta:
        managed = False
        db_table = 'matricula'
        verbose_name_plural = "matriculas"
        verbose_name = 'Matricula'
        ordering = ['codigo_mat']


class Secciones(models.Model):
    id_sec = models.AutoField(primary_key=True)
    nom_sec = models.CharField(max_length=5)
    aula_sec = models.CharField(max_length=6)

    def __str__(self):
        return self.nom_sec + " - # " + self.aula_sec

    class Meta:
        managed = False
        db_table = 'secciones'
        verbose_name_plural = "secciones"
        verbose_name = 'Seccion'
        ordering = ['nom_sec']


class Usuarios(models.Model):
    id_usu = models.AutoField(primary_key=True)
    dni_usu = models.CharField("D.N.I.", max_length=8, help_text="8 digitos")
    ape_usu = models.CharField("Apellidos", max_length=150)
    nom_usu = models.CharField("Nombre(s)", max_length=150)
    dire_usu = models.CharField("Dirección", max_length=250)
    email_usu = models.CharField("Email", max_length=50)
    celular_usu = models.DecimalField("Celular", max_digits=12, decimal_places=0)
    fecha_usu = models.DateField("Fecha de inscripción", auto_now=True, help_text="AAAA-MM-DD")
    # imagen_usu = models.ImageField("Fotografia", upload_to='img/usuarios/', blank=True, null=True)
    imagen_usu = models.CharField(max_length=350)
    activo = models.BooleanField("Activo", default=True, help_text="Activo: 1 - Inactivo: 0")
    slug = models.SlugField(max_length=150, help_text="Slug del APELLIDO")
    pass_usu = models.CharField("Password", max_length=120)
    tiposesion = models.CharField("Tipo de sesion", max_length=12, default="USUARIO")

    def __str__(self):
        return self.ape_usu + ", " + self.nom_usu + " - " + self.dni_usu

    class Meta:
        managed = False
        db_table = 'usuarios'
        verbose_name_plural = "usuarios"
        verbose_name = 'Usuario'
        ordering = ['ape_usu']
