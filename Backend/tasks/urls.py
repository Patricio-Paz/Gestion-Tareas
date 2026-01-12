from rest_framework.routers import DefaultRouter
from .views import TaskViewset

router= DefaultRouter()
router.register(r'tasks',TaskViewset)#no hay basename porque en views puse queryset

urlpatterns=router.urls