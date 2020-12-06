from django.contrib.auth import authenticate
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView

from .serializers import AlumnosSerializer, AlumnosLoginSerializer, DocentesSerializer, MateriaSerializer, \
    UsuariosSerializer, \
    LibreriaSerializer, \
    LibrePediLibrePediDetaSerializer, UserSerializer, MateriaLibreriaSerializer
from rest_framework import generics
from rest_framework import viewsets  # METODOS para Listas
import json
from .models import Alumnos, Docentes, Materia, Usuarios, Libreria, LibreriaPedido, LibreriaPedidoDetalle
from .models import User  # LOGIN
from rest_framework.authtoken.models import Token
from django.shortcuts import get_list_or_404, get_object_or_404

# GENERICS y sus Metodos
# Listar (ListAPIView)
# Create (CreateAPIView)
# Delete (DestroyAPIView)
# Actualizar (UpdateAPIView)
# (RetrieveAPIView)
# (ListCreateAPIView)

def index(request):
    template_name = "index.html"
    return render(request, template_name)


##################################################################
######################## ALUMNOS #################################
class AlumnosCreateListViewset(generics.ListCreateAPIView):
    queryset = Alumnos.objects.all()
    serializer_class = AlumnosSerializer
    permission_classes = (AllowAny,)


# class AlumnoDetailViewset(generics.RetrieveAPIView):
#     queryset = Alumnos.objects.all()
#     serializer_class = AlumnosSerializer
#     permission_classes = (AllowAny,)

class AlumnoFullViewset(viewsets.ModelViewSet):
    queryset = Alumnos.objects.all()
    serializer_class = AlumnosSerializer
    permission_classes = (AllowAny,)


class RegistrarAlumnos(generics.CreateAPIView):
    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        codigo_alu = request.data['codigo_alu']
        ape_alu = request.data['ape_alu']
        nom_alu = request.data['nom_alu']
        dni_alu = request.data['dni_alu']
        dire_alu = request.data['dire_alu']
        barra_alu = request.data['barra_alu']
        email_alu = request.data['email_alu']
        celular_alu = request.data['celular_alu']
        papa_alu = request.data['papa_alu']
        mama_alu = request.data['mama_alu']
        imagen_alu = request.data['imagen_alu']
        pass_alu = request.data['pass_alu']
        # *************************************
        # alumnos = Alumnos.objects.create_user(codigo_alu, ape_alu, nom_alu, dni_alu, dire_alu, barra_alu, email_alu, celular_alu, papa_alu, mama_alu, imagen_alu, pass_alu)
        alumnos = Alumnos()
        alumnos.codigo_alu = codigo_alu
        alumnos.ape_alu = ape_alu
        alumnos.nom_alu = nom_alu
        alumnos.dni_alu = dni_alu
        alumnos.dire_alu = dire_alu
        alumnos.barra_alu = barra_alu
        alumnos.email_alu = email_alu
        alumnos.celular_alu = celular_alu
        alumnos.papa_alu = papa_alu
        alumnos.mama_alu = mama_alu
        alumnos.imagen_alu = imagen_alu
        alumnos.pass_alu = pass_alu
        alumnos.save()

        if len(alumnos.dni_alu) != 8:
            data = {'detail': 'Alumnos con DNI invalido'}
        else:
            alumnos.save()
            data = {'detail': 'Alumno registrado correctamente'}
        reply = json.dumps(data)
        return HttpResponse(reply, content_type='application/json')


#     # *************************************
#     #token = Token.objects.create(alumno=alumno)
#     # *************************************
#     data = {'detail': 'ALUMNO NUEVO registrado correctamente - '}
#     reply = json.dumps(data)
#     return HttpResponse(reply, content_type='application/json')

# class CallAlumnoView(generics.RetrieveAPIView)

class MultipleFieldLookupMixin:
    def get_object(self):
        queryset = self.get_queryset()  # Obtener el conjunto de consultas base
        queryset = self.filter_queryset(queryset)  # Aplicar cualquier filtro backends
        filter = {}
        for field in self.lookup_fields:
            if self.kwargs[field]:  # Ignore los campos vacíos.
                filter[field] = self.kwargs[field]
        obj = get_object_or_404(queryset, **filter)  # Busque el objeto
        self.check_object_permissions(self.request, obj)
        return obj


class DetalleAlumnosCodigoViewset(MultipleFieldLookupMixin, generics.RetrieveAPIView):
    queryset = Alumnos.objects.all()
    serializer_class = AlumnosSerializer
    lookup_fields = ('codigo_alu', 'pass_alu')
    #lookup_fields = 'codigo_alu'
    permission_classes = (AllowAny,)

# class MultipleFieldLookupMixin(object):
#     def get_object(self):
#         queryset = self.get_queryset()  # Get the base queryset
#         queryset = self.filter_queryset(queryset)  # Apply any filter backends
#         filter = {}
#         for field in self.lookup_fields:
#             filter[field] = self.kwargs[self.lookup_field]
#         q = reduce(operator.or_, (Q(x) for x in filter.items()))
#         return get_object_or_404(queryset, q)
#
#
# class DetalleAlumnosCodigoViewset(MultipleFieldLookupMixin, viewsets.ModelViewSet):
#     queryset = Alumnos.objects.all()
#     serializer_class = AlumnosSerializer
#     lookup_fields = ('codigo_alu', 'pass_alu')


# class DetalleAlumnosCodigoViewset(generics.RetrieveAPIView):
#     queryset = Alumnos.objects.all()
#     serializer_class = AlumnosSerializer
#     lookup_field = 'codigo_alu'
#     # lookup_fields = ['codigo_alu', 'pass_alu']
#     permission_classes = (AllowAny,)


# ************************************************************************#
# ************************************************************************#
class UserViewSet(viewsets.ModelViewSet):  # LOGIN
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)


# ************************************************************#
# ************************************************************#
# METODOS SEGUROS para serializar
class MateriaCreateListViewset(generics.ListCreateAPIView):
    queryset = Materia.objects.all()
    serializer_class = MateriaSerializer
    # permission_classes = (AllowAny,)


class MateriaAllViewset(generics.ListAPIView):
    queryset = Materia.objects.all()
    serializer_class = MateriaSerializer
    permission_classes = (AllowAny,)


############################################################
class MateriaFullViewset(viewsets.ModelViewSet):
    queryset = Materia.objects.all()
    serializer_class = MateriaSerializer
    permission_classes = (AllowAny,)


class MateriaLibreriaViewset(generics.ListAPIView):
    queryset = Materia.objects.all()
    serializer_class = MateriaLibreriaSerializer
    permission_classes = (AllowAny,)


# *****************************************************
class DocentesAllViewset(generics.ListAPIView):
    queryset = Docentes.objects.all()
    serializer_class = DocentesSerializer
    permission_classes = (AllowAny,)


class DocentesCreateListViewset(generics.ListCreateAPIView):
    queryset = Docentes.objects.all()
    serializer_class = DocentesSerializer
    # permission_classes = (AllowAny,)


class DocentesDeletePkViewset(generics.DestroyAPIView):
    queryset = Docentes.objects.all()
    serializer_class = DocentesSerializer
    lookup_field = 'id_doce'
    # permission_classes = (AllowAny,)


class DocentesUpdatePkViewset(generics.UpdateAPIView):
    queryset = Docentes.objects.all()
    serializer_class = DocentesSerializer
    lookup_field = 'id_doce'
    # permission_classes = (AllowAny,)


class DocentesDetailPkViewset(generics.RetrieveAPIView):
    queryset = Docentes.objects.all()
    serializer_class = DocentesSerializer
    lookup_field = 'id_doce'
    permission_classes = (AllowAny,)


##################################################################
class RegistrarUsuarios(generics.CreateAPIView):
    # permission_classes = (AllowAny,)

    def post(self, request, format=None):
        postman_dni_usu = request.data['dni_usu']
        postman_ape_usu = request.data['ape_usu']
        postman_nom_usu = request.data['nom_usu']
        postman_dire_usu = request.data['dire_usu']
        postman_email_usu = request.data['email_usu']
        postman_celular_usu = request.data['celular_usu']
        postman_fecha_usu = request.data['fecha_usu']
        postman_imagen_usu = request.data['imagen_usu']
        postman_activo = request.data['activo']
        postman_slug = request.data['slug']
        # ************************************************
        # ORM DJango
        usuarios = Usuarios()
        usuarios.dni_usu = postman_dni_usu
        usuarios.ape_usu = postman_ape_usu
        usuarios.nom_usu = postman_nom_usu
        usuarios.dire_usu = postman_dire_usu
        usuarios.email_usu = postman_email_usu
        usuarios.celular_usu = postman_celular_usu
        usuarios.fecha_usu = postman_fecha_usu
        usuarios.imagen_usu = postman_imagen_usu
        usuarios.activo = postman_activo
        usuarios.slug = postman_slug
        if len(usuarios.dni_usu) != 8 and usuarios.dni_usu[-1] != 2:
            data = {'detail': 'Usuario invalido'}
        else:
            usuarios.save()
            data = {'detail': 'Usuario guardado correctamente'}
        reply = json.dumps(data)
        return HttpResponse(reply, content_type='application/json')


class UsuariosAllViewset(generics.ListAPIView):
    queryset = Usuarios.objects.all()
    serializer_class = UsuariosSerializer
    permission_classes = (AllowAny,)


##################################################################
class LibreriaFullViewset(viewsets.ModelViewSet):
    queryset = Libreria.objects.all()
    serializer_class = LibreriaSerializer
    permission_classes = (AllowAny,)


class LibrePediLibrePediDetaViewSet(generics.ListAPIView):
    queryset = LibreriaPedido.objects.all()
    serializer_class = LibrePediLibrePediDetaSerializer
    permission_classes = (AllowAny,)


##################################################################
##################################################################

class RegisterUser(generics.CreateAPIView):
    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        username = request.data['username']
        email = request.data['email']
        password = request.data['password']
        first_name = request.data['first_name']
        last_name = request.data['last_name']
        is_staff = request.data['is_staff']
        # *************************************
        user = User.objects.create_user(username, email, password)
        user.first_name = first_name
        user.last_name = last_name
        user.is_staff = is_staff
        user.save()
        # *************************************
        token = Token.objects.create(user=user)
        # *************************************
        data = {'detail': 'USUARIO NUEVO guardado correctamente - ' + token.key}
        reply = json.dumps(data)
        return HttpResponse(reply, content_type='application/json')


class LoginView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        username = request.data['username']
        password = request.data['password']
        user = authenticate(username=username, password=password)
        if user:
            token = Token.objects.get(user_id=user.pk)
            data = {'username': user.username,
                    'apellido': user.last_name,
                    'nombre': user.first_name,
                    'correo': user.email,
                    'token': token.key}
        else:
            data = {'detail': 'User Incorrecto - 0'}
        reply = json.dumps(data)
        return HttpResponse(reply, content_type='application/json')
