from django.shortcuts import render
from rest_framework import viewsets,permissions
from .serializers import *
from .models import *
from rest_framework.response import Response

from django.db.models import Count


from rest_framework import permissions, viewsets


class DashBoardDataViewset(viewsets.ViewSet):
    permission_classes=[permissions.AllowAny]
    queryset=Data.objects.all()
    print("Hello")
    serializer_class=DashBoarddata

    def list(self,request):
        queryset=Data.objects.all()
        serializer=self.serializer_class(queryset,many=True)
        return Response(serializer.data)
    
class DashBoardDataViewset(viewsets.ViewSet):
    permission_classes=[permissions.AllowAny]
    queryset=Data.objects.all()
    print("Hello")
    serializer_class=DashBoarddata

    def list(self,request):
        queryset=Data.objects.all()
        serializer=self.serializer_class(queryset,many=True)
        return Response(serializer.data)


class TopicDataViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Data.objects.all()
    serializer_class = Topicdata

    def list(self, request):
       
        queryset = Data.objects.filter(pestle__isnull=False, sector="Energy").values('pestle').annotate(count=Count('pestle'))
        
        
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
class dashboard1DataViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Data.objects.all()
    serializer_class = dashboar1Data

    def list(self, request):
        
        queryset = Data.objects.filter(sector="Information Technology")
        
        
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
class dashboard2DataViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Data.objects.all()
    serializer_class = dashboar2Data

    def list(self, request):
        
        queryset = Data.objects.filter(sector="Construction")
        
        
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
class dashboard3DataViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Data.objects.all()
    serializer_class = dashboar3Data

    def list(self, request):
        
        queryset = Data.objects.filter(sector="Environment")
        
       
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
class dashboard4DataViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Data.objects.all()
    serializer_class = dashboar4Data

    def list(self, request):
        
        queryset = Data.objects.filter(sector="Government")
        
       
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)


class dashboard5DataViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Data.objects.all()
    serializer_class = dashboar5Data

    def list(self, request):
        
        queryset = Data.objects.filter(sector="Manufacturing")
        
       
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
class dashboard6DataViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Data.objects.all()
    serializer_class = dashboar6Data

    def list(self, request):
        
        queryset = Data.objects.filter(sector="Support services")
        
       
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)






