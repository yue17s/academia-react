from django.contrib import admin
from django.utils.html import format_html
from .models import Alumnos, AlumnosAsistencia, AlumnosNotas, Matricula, Materia, Usuarios, Biblioteca, \
    BibliotecaPrestamoDetalle, BibliotecaPrestamo, Horario, Facturacion, Libreria, \
    LibreriaPedido, LibreriaPedidoDetalle, Docentes, Secciones, CursosComple, Cursos, Person, User

admin.site.register(
    [Alumnos, AlumnosAsistencia, AlumnosNotas, Matricula, Materia, Biblioteca, BibliotecaPrestamoDetalle,
     BibliotecaPrestamo, Horario, Facturacion, Secciones, CursosComple, Cursos])


#########################################################
class UserAdmin(admin.ModelAdmin):
    def image_tag(self, obj):
        # return format_html('<img src={{}} width="100px" height="100px" />'.format(user.mostrar_imagen))
        return format_html('<img src="{}" width="100px" height="100px" />'.format(obj.get_img()))

    image_tag.short_description = 'Image'
    list_display = ['username', 'email', 'name', 'image_tag']


admin.site.register(User, UserAdmin)
admin.site.register(Person)


#########################################################
class DocentesAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('ape_doce',)}


admin.site.register(Docentes, DocentesAdmin, )


#########################################################
class UsuariosAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('ape_usu',)}


admin.site.register(Usuarios, UsuariosAdmin, )
#########################################################
admin.site.register([Libreria, LibreriaPedido, LibreriaPedidoDetalle, ])
#########################################################
#########################################################
