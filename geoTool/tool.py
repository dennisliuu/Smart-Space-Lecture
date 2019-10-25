from geographiclib.geodesic import Geodesic
from geopy.distance import great_circle
import math
from pprint import pprint

#計算地理座標兩點間的距離
def calculate_distance(p1_lat, p1_lon, p2_lat, p2_lon):
    p1 = (p1_lat, p1_lon)
    p2 = (p2_lat, p2_lon)
    return great_circle(p1, p2).m


#計算地理座標兩點之間依段數均分的座標點
def get_coords_by_section_count(start_lat, start_lng, end_lat, end_lng, section_no):
    gd = Geodesic.WGS84.Inverse(start_lat, start_lng, end_lat, end_lng)
    line = Geodesic.WGS84.Line(gd['lat1'], gd['lon1'], gd['azi1'])
    result = []
    for i in range(section_no + 1):
        coord = line.Position(gd['s12'] / section_no * i)
        result.append([coord['lon2'], coord['lat2']])
    return result


#計算地理座標兩點之間，從起始點每？公尺的每一點，計算所得最後點可能不會跟設定結束點一致
def get_coords_by_distance(start_lat, start_lng, end_lat, end_lng, distance):
    total_distance = calculate_distance(start_lat, start_lng, end_lat, end_lng)
    sections = math.floor(total_distance / distance)
    gd = Geodesic.WGS84.Inverse(start_lat, start_lng, end_lat, end_lng)
    result = []
    for i in range(sections):
        coord = Geodesic.WGS84.Direct(gd['lat1'], gd['lon1'], gd['azi1'], distance * i)
        result.append([coord['lon2'], coord['lat2']])
    return result


# distance = calculate_distance(25.040806, 121.540993, 25.040848552367514, 121.54108039255927)
# pprint(distance)

# distance_list = get_coords_by_section_count(25.040806, 121.540993, 25.046949, 121.553611, 10)
# pprint(distance_list)

coords = get_coords_by_distance(25.040806, 121.540993, 25.046949, 121.553611, 100)
pprint(coords)
