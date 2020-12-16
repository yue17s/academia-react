from django.urls import path, include
from . import views
from .views import index
from .views import UserViewSet  # LOGIN

# Para crear un API RESTFULL
####################################################################
from rest_framework import routers

router = routers.DefaultRouter()
router.register('users', UserViewSet)  # LOGIN
router.register('full_alumno', views.AlumnoFullViewset)
router.register('full_materia', views.MateriaFullViewset)
router.register('full_libreria', views.LibreriaFullViewset)
####################################################################


urlpatterns = [
    #path('', include(router.urls)),  # LOGIN
    path('', index, name='index'),
    #**********************************************************************************#
    path('Detail_Alumno/(<codigo_alu>)/(<pass_alu>)/', views.DetalleAlumnosCodigoViewset.as_view()),  # GET --> http://127.0.0.1:8000/Detail_Alumno/<codigo_alu>/
    path('Create_List_Alumnos/', views.AlumnosCreateListViewset.as_view()),  # POST --> http://127.0.0.1:8000/Create_List_Alumnos/
    path('Crear_Alumno/', views.RegistrarAlumnos.as_view()),  # POST --> http://127.0.0.1:8000/Create_One_Alumno/

    path('Detail_Alumnos_Asistencias/', views.DetalleAlumnosAsistenciasViewset.as_view()), # GET --> http://127.0.0.1:8000/Detail_Alumno_Asistencia/
    path('Detail_Alumno_Asistencia/<codigo_alu>/', views.DetalleAlumnoAsistenciaViewset.as_view()),
    path('List_Alumno_Asistencia/', views.AlumnosAsistenciaViewset.as_view()), # GET --> http://127.0.0.1:8000/List_Alumno_Asistencia/

    path('Detail_Alumnos_Notas/', views.DetalleAlumnosNotasViewset.as_view()), # GET --> http://127.0.0.1:8000/List_Alumno_Asistencia
    path('Detail_Alumno_Nota/<codigo_alu>/', views.DetalleAlumnoNotaViewset.as_view()),
    path('List_Alumnos_Notas/', views.AlumnosNotasViewset.as_view()), # GET --> http://127.0.0.1:8000/List_Alumnos_Notas/
    #**********************************************************************************#
    path('Create_List_Materia/', views.MateriaCreateListViewset.as_view()),  # GET --> http://127.0.0.1:8000/Create_List_Materia/
    path('List_All_Materia/', views.MateriaAllViewset.as_view()),  # GET --> http://127.0.0.1:8000/List_All_Materia/
    path('List_Materia_Libreria/', views.MateriaLibreriaViewset.as_view()),  # GET --> http://127.0.0.1:8000/List_Materia_Libreria/
    #**********************************************************************************#
    path('List_All_Docentes/', views.DocentesAllViewset.as_view()),  # GET --> http://127.0.0.1:8000/List_All_Docentes/
    path('Create_List_Docentes/', views.DocentesCreateListViewset.as_view()),  # GET --> http://127.0.0.1:8000/Create_List_Docentes/
    path('Delete_Docentes/<id_doce>/', views.DocentesDeletePkViewset.as_view()),  # DELETE --> http://127.0.0.1:8000/Delete_Docentes/<id_doce>/
    path('Update_Docentes/<id_doce>/', views.DocentesUpdatePkViewset.as_view()),  # PUT --> http://127.0.0.1:8000/Update_Docentes/<id_doce>/
    path('Detail_Docentes/<id_doce>/', views.DocentesDetailPkViewset.as_view()),  # GET --> http://127.0.0.1:8000/Detail_Docentes/<id_doce>/
    #**********************************************************************************#
    path('Detail_Usuario/(<email_usu>)/(<pass_usu>)/', views.DetalleUsuariosCodigoViewset.as_view()), # GET --> http://127.0.0.1:8000/Detail_Usuario/(<email_usu>)/(<pass_usu>)/
    path('Crear_Usuario/', views.RegistrarUsuarios.as_view()),  # POST --> http://127.0.0.1:8000/Crear_Usuario/
    path('List_All_Usuarios/', views.UsuariosAllViewset.as_view()),  # GET --> http://127.0.0.1:8000/List_All_Usuarios/
    path('Create_User/', views.RegisterUser.as_view()),  # POST --> http://127.0.0.1:8000/Create_User/
    path('Login/', views.LoginView.as_view()),  # POST --> http://127.0.0.1:8000/Login/
    #**********************************************************************************#
    path('List_Libre_Recomendados/', views.LibrePediRecomendadosDetaViewSet.as_view()),
    path('List_LibrePedi_LibrePediDeta/', views.LibrePediLibrePediDetaViewSet.as_view()),  # POST --> http://127.0.0.1:8000/List_LibrePedi_LibrePediDeta/
    path('Registrar_Checkout/', views.RegistrarCheckout.as_view()),  # POST --> http://127.0.0.1:8000/Registrar_Checkout/


    # ENDPOINT para el API RESTFULL
    path('apis/', include(router.urls)),
    # http://127.0.0.1:8000/apis/full_materia/  -- # http://127.0.0.1:8000/apis/full_libreria/
]
