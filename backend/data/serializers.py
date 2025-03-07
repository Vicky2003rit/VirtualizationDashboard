from rest_framework import serializers
from .models import *
class DashBoarddata(serializers.ModelSerializer):
    class Meta:
        model=Data
        
        fields = '__all__'
class Topicdata(serializers.ModelSerializer):
    
    label=serializers.CharField(source="pestle")
    value = serializers.IntegerField(source="count")
    class Meta:
        model = Data  
        fields = ['id', 'label', 'value']  
class dashboar1Data(serializers.ModelSerializer):
    class Meta:
        model=Data
        
        fields = '__all__'

class dashboar2Data(serializers.ModelSerializer):
    class Meta:
        model=Data
        
        fields = '__all__'
class dashboar3Data(serializers.ModelSerializer):
    class Meta:
        model=Data
        
        fields = '__all__'
class dashboar4Data(serializers.ModelSerializer):
    class Meta:
        model=Data
        # fields=('end_year','intensity','sector','topic','insight','url','region','start_year','impact','added','published','country','relevance','pestle','source','title','likelihood')
        fields = '__all__'
class dashboar5Data(serializers.ModelSerializer):
    class Meta:
        model=Data
        # fields=('end_year','intensity','sector','topic','insight','url','region','start_year','impact','added','published','country','relevance','pestle','source','title','likelihood')
        fields = '__all__'
class dashboar6Data(serializers.ModelSerializer):
    class Meta:
        model=Data
        # fields=('end_year','intensity','sector','topic','insight','url','region','start_year','impact','added','published','country','relevance','pestle','source','title','likelihood')
        fields = '__all__'


