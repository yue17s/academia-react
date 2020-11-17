from django.contrib import admin

from .models import Alumnos, AlumnosAsistencia, BibliotecaPrestamo, Biblioteca, BibliotecaPrestamoDetalle, Cursos, CursosComple, Docentes, Facturacion, Horario, Libreria, LibreriaPedidoDetalle, LibreriaPedido, Materia, Matricula, Secciones, Usuarios

admin.site.register([Alumnos, AlumnosAsistencia, BibliotecaPrestamo, Biblioteca, BibliotecaPrestamoDetalle, Cursos, CursosComple, Docentes, Facturacion, Horario, Libreria, LibreriaPedidoDetalle, LibreriaPedido,
                     Materia, Matricula, Secciones, Usuarios])
