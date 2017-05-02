
#  need to sort start time
# bug with the last example that should produce [(1,10)]
def mergeRanges(arr):
    #arr = sorted(arr, key=lambda tuple: tuple[0])
    arr = sorted(arr)

    start = arr[0][0]
    end = arr[0][1]

    result = []
    for i in range(len(arr)):
        # if currEnd >= nextStart
        if i < len(arr) - 1 and arr[i][1] >= arr[i+1][0]:  
            start = min(start, arr[i][0]) # earliest of running start and current start time
            end = max(end, arr[i][1], arr[i+1][1]) # latest current end and next end time
        else:
            result.append((start, end)) # add the merged tuple to result
            if i < len(arr) - 1:
                start = arr[i+1][0] # next start time
                end = arr[i+1][1] # next end time

    return result

# Solution O(nlogn)
def merge_ranges(meetings):

    # sort by start times
    sorted_meetings = sorted(meetings)

    # initialize merged_meetings with the earliest meeting
    merged_meetings = [sorted_meetings[0]]

    for current_meeting_start, current_meeting_end in sorted_meetings[1:]:

        last_merged_meeting_start, last_merged_meeting_end = merged_meetings[-1]

        # if the current and last meetings overlap, use the latest end time
        if (current_meeting_start <= last_merged_meeting_end):
            merged_meetings[-1] = (last_merged_meeting_start, max(last_merged_meeting_end, current_meeting_end))

        # add the current meeting since it doesn't overlap
        else:
            merged_meetings.append((current_meeting_start, current_meeting_end))

    return merged_meetings

if __name__ == "__main__":
    print(mergeRanges([(0,1), (3,5), (4,8), (11,12), (9,10)])) # [(0, 1), (3, 8), (9, 10), (11, 12)]
    print(mergeRanges([(0,1), (3,5), (4,8), (9,10), (10,12)])) # [(0, 1), (3, 8), (9, 12)]
    print(mergeRanges([(1, 2), (2, 3)])) # [(1, 3)]
    print(mergeRanges([(1, 5), (2, 3)])) # [(1, 5)]
    print(mergeRanges([(1, 3), (2, 4)])) # [(1, 4)]
    print(mergeRanges([(1, 10), (2, 6), (3, 5), (7, 9)])) # [(1,10)]

    print(merge_ranges([(1, 10), (2, 6), (3, 5), (7, 9)])) # [(1,10)]
        
