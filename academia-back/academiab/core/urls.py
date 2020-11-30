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
    path('LoginAlumno/', views.LoginAlumnoView.as_view()),  # POST --> http://127.0.0.1:8000/LoginAlumno/
    path('Create_List_Alumnos/', views.AlumnosCreateListViewset.as_view()),  # POST --> http://127.0.0.1:8000/Create_List_Alumnos/
    #path('Detail_Alumno/', views.AlumnoDetailViewset.as_view()),  # POST --> http://127.0.0.1:8000/Detail_Alumnos/
    path('Crear_Alumno/', views.RegistrarAlumnos.as_view()),  # POST --> http://127.0.0.1:8000/Create_One_Alumno/
    #**********************************************************************************#
    path('Create_List_Materia/', views.MateriaCreateListViewset.as_view()),  # GET --> http://127.0.0.1:8000/Create_List_Materia/
    path('List_All_Materia/', views.MateriaAllViewset.as_view()),  # GET --> http://127.0.0.1:8000/List_All_Materia/
    #**********************************************************************************#
    path('List_All_Docentes/', views.DocentesAllViewset.as_view()),  # GET --> http://127.0.0.1:8000/List_All_Docentes/
    path('Create_List_Docentes/', views.DocentesCreateListViewset.as_view()),  # GET --> http://127.0.0.1:8000/Create_List_Docentes/
    path('Delete_Docentes/<id_doce>/', views.DocentesDeletePkViewset.as_view()),  # DELETE --> http://127.0.0.1:8000/Delete_Docentes/<id_doce>/
    path('Update_Docentes/<id_doce>/', views.DocentesUpdatePkViewset.as_view()),  # PUT --> http://127.0.0.1:8000/Update_Docentes/<id_doce>/
    path('Detail_Docentes/<id_doce>/', views.DocentesDetailPkViewset.as_view()),  # GET --> http://127.0.0.1:8000/Detail_Docentes/<id_doce>/
    #**********************************************************************************#
    path('Crear_Usuario/', views.RegistrarUsuarios.as_view()),  # POST --> http://127.0.0.1:8000/Crear_Usuario/
    path('List_All_Usuarios/', views.UsuariosAllViewset.as_view()),  # GET --> http://127.0.0.1:8000/List_All_Usuarios/
    path('Create_User/', views.RegisterUser.as_view()),  # POST --> http://127.0.0.1:8000/Create_User/
    path('Login/', views.LoginView.as_view()),  # POST --> http://127.0.0.1:8000/Login/
    #**********************************************************************************#
    path('List_LibrePedi_LibrePediDeta/', views.LibrePediLibrePediDetaViewSet.as_view()),  # POST --> http://127.0.0.1:8000/List_LibrePedi_LibrePediDeta/

    # ENDPOINT para el API RESTFULL
    path('apis/', include(router.urls)),
    # http://127.0.0.1:8000/apis/full_materia/  -- # http://127.0.0.1:8000/apis/full_libreria/
]
