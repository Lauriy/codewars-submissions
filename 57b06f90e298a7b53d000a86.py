def queue_time(customers, n):
    tills = [0 for each in range(n)]
    counter = 0
    while True:
        has_active_till = False
        for i in range(len(tills)):
            if tills[i] == 0 and len(customers):
                tills[i] = customers[0]
                has_active_till = True
                del (customers[0])
            elif tills[i] > 0:
                has_active_till = True
            tills[i] -= 1
        counter += 1
        if not has_active_till:
            break

    return counter - 1
