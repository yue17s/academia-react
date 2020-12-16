from rest_framework import serializers
from .models import Alumnos, AlumnosAsistencia, AlumnosNotas, Docentes, Materia, Usuarios, Libreria, LibreriaPedido, \
    LibreriaPedidoDetalle
from .models import User, Person  # LOGIN


# *********************************************************************************#
class PersonSerializer(serializers.ModelSerializer):  # HIJO
    class Meta:
        model = Person
        fields = ("age", "bio", "picture")


class UserSerializer(serializers.ModelSerializer):  # PADRE
    person = PersonSerializer()

    class Meta:
        model = User
        fields = ("id", "username", "password", "person")
        extra_kwargs = {'password': {"write_only": True, 'required': True}}

    def create(self, validated_data):
        person_data = validated_data.pop('person')
        user = User.objects.create(**validated_data)
        user.person = Person.objects.create(user=user, **person_data)
        user.save()
        return user


# *********************************************************************************#
# *********************************************************************************#
class AlumnosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumnos
        fields = '__all__'


class AlumnosLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumnos
        fields = ['codigo_alu', 'pass_alu']


######
class DetalleAlumnosAsistenciasSerializer(serializers.ModelSerializer):

    class Meta:
        model = AlumnosAsistencia
        # fields = '__all__'
        fields = ['id_asis', 'alumnos_id_alu', 'fecha_asis']


class AlumnosAsistenciasSerializer(serializers.ModelSerializer):
    alumnosAsistenciasAlumnos = DetalleAlumnosAsistenciasSerializer(many=True, read_only=True)

    class Meta:
        model = Alumnos
        fields = ['id_alu', 'codigo_alu', 'pass_alu', 'ape_alu', 'nom_alu', 'imagen_alu', 'alumnosAsistenciasAlumnos']


class AlumnosAsistenciaSerializer(serializers.ModelSerializer):
    alumnosAsistenciasAlumnos = DetalleAlumnosAsistenciasSerializer(many=True, read_only=True)

    class Meta:
        model = Alumnos
        # fields = '__all__'
        fields = ['id_alu', 'codigo_alu', 'pass_alu', 'ape_alu', 'nom_alu', 'imagen_alu', 'alumnosAsistenciasAlumnos']


class DetalleAlumnoAsistenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlumnosAsistencia
        fields = '__all__'


#################

class DetalleAlumnosNotasSerializer(serializers.ModelSerializer):
    alumnosNotasCurso = serializers.CharField(source='cursos_id_curso.nom_curso')
    alumnosNotasMatricula = serializers.CharField(source='matricula_id_mat.codigo_mat')

    class Meta:
        model = AlumnosNotas
        fields = ['alumnos_id_alu', 'alumnosNotasMatricula', 'alumnosNotasCurso', 'nota1_nota', 'nota2_nota',
                  'promedio_nota']
        # fields = '__all__'


class AlumnosNotasSerializer(serializers.ModelSerializer):
    alumnosNotasAlumnos = DetalleAlumnosNotasSerializer(many=True, read_only=True)

    class Meta:
        model = Alumnos
        fields = ['id_alu', 'codigo_alu', 'pass_alu', 'ape_alu', 'nom_alu', 'imagen_alu', 'alumnosNotasAlumnos']


class DetalleAlumnoNotaSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlumnosNotas
        fields = '__all__'


# *********************************************************************************#
# *********************************************************************************#

class MateriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Materia
        fields = '__all__'
        # fields = ['id_mate', 'nom_mate']


# *********************************************************************************#
class DocentesSerializer(serializers.ModelSerializer):
    nom_docemate = serializers.CharField(source='materia_id_mate.nom_mate')

    class Meta:
        model = Docentes
        fields = ['id_doce', 'codigo_doce', 'ape_doce', 'nom_doce', 'dni_doce', 'email_doce', 'celular_doce',
                  'barra_doce', 'cv_doce', 'imagen_doce', 'activo', 'slug', 'nom_docemate']


# class DocentesDetalleSerializer(serializers.ModelSerializer):
#     nom_docemate = serializers.CharField(source='materia.nom_mate')
#
#     class Meta:
#         model = Docentes
#         fields = ['nom_docemate']


# ***********************************************************************************#
# ******************************* LIBRERIA ******************************************#
class LibreriaSerializer(serializers.ModelSerializer):
    nom_libremate = serializers.CharField(source='materia_id_mate.nom_mate')

    # libreriaMateria = serializers.CharField(source='materia.nom_mate')

    class Meta:
        model = Libreria
        fields = ['id_libre', 'codigo_libre', 'nom_libremate', 'titulo_libre', 'autor_libre', 'editorial_libre',
                  'edicion_libre', 'isbn_libre', 'stock_libre', 'precio_libre', 'barra_libre', 'disponible_libre',
                  'imagen_libre', 'detalle_libre', 'recomendado_libre']
        # fields = '__all__'


class LibreriaPedidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = LibreriaPedido
        fields = ['codigo_lipe', 'fecha_lipe', 'entrego_lpd', 'usuarios']


class LibreriaPedidoDetalleSerializer(serializers.ModelSerializer):
    nom_libro = serializers.CharField(source='libreria.titulo_libre')
    img_libro = serializers.CharField(source='libreria.imagen_libre')

    class Meta:
        model = LibreriaPedidoDetalle
        fields = ['nom_libro', 'img_libro', 'cantidad_lpd', 'precio', 'descuento_lpd']


class LibrePediLibrePediDetaSerializer(serializers.ModelSerializer):
    LibreriaPedidoDetallePedido = LibreriaPedidoDetalleSerializer(many=True, read_only=True)  # HIJO
    nom_usu = serializers.CharField(source='usuarios.nom_usu')

    class Meta:
        model = Libreria
        fields = ['codigo_lipe', 'fecha_lipe', 'entrego_lpd']  # PADRE


class LibrePediRecomendadosDetaSerializer(serializers.ModelSerializer):
    nom_libremate = serializers.CharField(source='materia_id_mate.nom_mate')

    class Meta:
        model = Libreria
        fields = ['id_libre', 'codigo_libre', 'nom_libremate', 'titulo_libre', 'autor_libre', 'editorial_libre',
                  'edicion_libre', 'isbn_libre', 'stock_libre', 'precio_libre', 'barra_libre', 'disponible_libre',
                  'imagen_libre', 'detalle_libre', 'recomendado_libre']

        # *************************************************************************


class MateriaLibreriaSerializer(serializers.ModelSerializer):
    libreriaMateria = LibreriaSerializer(many=True, read_only=True)

    class Meta:
        model = Materia
        fields = ['id_mate', 'nom_mate', 'libreriaMateria']


# ***********************************************************************************#
# ******************************* USUARIO *******************************************#

class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = '__all__'
        # fields = ['id_usu', 'ape_usu', 'nom_usu']
