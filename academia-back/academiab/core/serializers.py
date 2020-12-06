from rest_framework import serializers
from .models import Alumnos, Docentes, Materia, Usuarios, Libreria, LibreriaPedido, LibreriaPedidoDetalle
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
class AlumnosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumnos
        fields = '__all__'


class AlumnosLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumnos
        fields = ['codigo_alu', 'pass_alu']


# *********************************************************************************#

class MateriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Materia
        fields = '__all__'
        # fields = ['id_mate', 'nom_mate']


class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = '__all__'
        # fields = ['id_usu', 'ape_usu', 'nom_usu']


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


# *********************************************************************************#
# ******************************* LIBRERIA ******************************************#
class LibreriaSerializer(serializers.ModelSerializer):
    nom_libremate = serializers.CharField(source='materia_id_mate.nom_mate')
    #libreriaMateria = serializers.CharField(source='materia.nom_mate')

    class Meta:
        model = Libreria
        fields = ['codigo_libre', 'nom_libremate', 'titulo_libre', 'autor_libre', 'editorial_libre',
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
        model = LibreriaPedido
        fields = ['nom_usu', 'codigo_lipe', 'fecha_lipe', 'entrego_lpd', 'LibreriaPedidoDetallePedido']  # PADRE


# *************************************************************************
class MateriaLibreriaSerializer(serializers.ModelSerializer):
    libreriaMateria = LibreriaSerializer(many=True, read_only=True)

    class Meta:
        model = Materia
        fields = ['id_mate', 'nom_mate', 'libreriaMateria']
