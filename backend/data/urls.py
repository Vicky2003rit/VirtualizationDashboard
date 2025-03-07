
from django.contrib import admin
from django.urls import path
from rest_framework.routers import  DefaultRouter
from .views import*

router =DefaultRouter()
router.register('dashboarddata',DashBoardDataViewset,basename='dashboarddata')
router.register('topicdata',TopicDataViewset,basename='topicdata')
router.register('dashboar1Data',dashboard1DataViewset,basename='dashboar1Data')
router.register('dashboar2Data',dashboard2DataViewset,basename='dashboar2Data')
router.register('dashboar3Data',dashboard3DataViewset,basename='dashboar3Data')
router.register('dashboar4Data',dashboard4DataViewset,basename='dashboar4Data')
router.register('dashboar5Data',dashboard5DataViewset,basename='dashboar5Data')
router.register('dashboar6Data',dashboard6DataViewset,basename='dashboar6Data')
urlpatterns=router.urls

