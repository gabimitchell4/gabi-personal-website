def lucky_thirteen(my_list):
    final_list = []
    for num in range(1, len(my_list) - 1):
        if my_list[num] + my_list[num - 1] == 13:
            final_list.append(str(my_list[num - 1]) + " + " + str(my_list[num]) + " = 13")
    return final_list

lucky_thirteen([1, 13, 4, 6, 2, 0, 13, 1, 12])