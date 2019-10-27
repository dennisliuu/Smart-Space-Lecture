from geographiclib.geodesic import Geodesic
from geopy.distance import great_circle
import math
from pprint import pprint

# 計算地理座標兩點之間依「段數」均分的座標點
# get_coords_by_section_count(起始 x 座標, 起始 y 座標, 終止 x 座標, 終止 y 座標, 段數（即切幾份）)
def get_coords_by_section_count(start_lat, start_lng, end_lat, end_lng, section_no):
    
    # 設定起始、終止座標
    gd = Geodesic.WGS84.Inverse(start_lat, start_lng, end_lat, end_lng)
    
    # 設定經度、緯度、方位角
    line = Geodesic.WGS84.Line(gd['lat1'], gd['lon1'], gd['azi1'])
    
    # 定義一個空的陣列，等等要把資料存入
    result = []

    # for 迴圈，從 0 跑到第幾段數。其中 + 1 的原因是因為 python for loop 會少一個
    for i in range(section_no + 1):

        # gd['s12']：從起始經緯度到終止經緯度以「公尺」計的距離 「除以」 section_no * i：第 i 段數
        coord = line.Position(gd['s12'] / section_no * i)

        # 將資料加入 (append) 到陣列中
        result.append([coord['lon2'], coord['lat2']])
    
    # 回傳
    return result

#計算地理座標兩點間的距離
def calculate_distance(p1_lat, p1_lon, p2_lat, p2_lon):
    # 將 p1, p2 定義為 （x 座標, y 座標）
    p1 = (p1_lat, p1_lon)
    p2 = (p2_lat, p2_lon)

    # 回傳距離 (以公尺 m 為單位，也可以換成 miles, km, ...)
    return great_circle(p1, p2).m

#計算地理座標兩點之間，從起始點每？公尺的每一點，計算所得最後點可能不會跟設定結束點一致
def get_coords_by_distance(start_lat, start_lng, end_lat, end_lng, distance):
    
    # 計算距離，使用上面的副函式：def calculate_distance(p1_lat, p1_lon, p2_lat, p2_lon):
    total_distance = calculate_distance(start_lat, start_lng, end_lat, end_lng)

    # 計算可以分出幾段（距離已從上一行決定），並採取無條件捨去 (math.floor)
    sections = math.floor(total_distance / distance)

    # 設定起始、終止座標
    gd = Geodesic.WGS84.Inverse(start_lat, start_lng, end_lat, end_lng)

    # 定義一個空的陣列，等等要把資料存入
    result = []

    # for 迴圈，從 0 跑到第幾段數。
    for i in range(sections + 1):

        # 將經度、緯度、方位角、第 i 個距離一次丟給 Geodesic 這個函數庫，並得到座標點
        coord = Geodesic.WGS84.Direct(gd['lat1'], gd['lon1'], gd['azi1'], distance * i)
        
        # 將經度、緯度存入 result
        result.append([coord['lon2'], coord['lat2']])
    
    # 回傳
    return result

print("Created by Section count @ 5")
distance_list = get_coords_by_section_count(25.040806, 121.540993, 25.046949, 121.553611, 5)
pprint(distance_list)
print("================================================================")
print("Created by Distance @ 100m")
coords = get_coords_by_distance(25.040806, 121.540993, 25.046949, 121.553611, 100)
pprint(coords)
